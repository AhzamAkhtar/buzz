import * as anchor from "@project-serum/anchor";
import { useEffect, useMemo, useState } from "react";
import { TODO_PROGRAM_PUBKEY } from "../constants";
import todoIDL from "../constants/buzz.json";
import { toast, ToastContainer } from "react-toastify";
import { SystemProgram } from "@solana/web3.js";
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import { authorFilter } from "../utils";
import { set } from "@project-serum/anchor/dist/cjs/utils/features";

export function useBuzz() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const anchorWallet = useAnchorWallet();

  const [allUsers, setAllUsers] = useState([]);
  const [initialized, setInitialized] = useState(false);
  const [transactionPending, setTransactionPending] = useState(false);

  const [followers, setFollowers] = useState(1);
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [profileUrl, setProfileUrl] = useState();
  const [country, setCountry] = useState();
  const [description, setDesription] = useState();
  const [loading, setLoading] = useState(false);

  const showToast = () => {
    toast.success("Your Account Created Successfully !!", {
      toastId: "abx",

      position: "bottom-left",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const program = useMemo(() => {
    if (anchorWallet) {
      const provider = new anchor.AnchorProvider(
        connection,
        anchorWallet,
        anchor.AnchorProvider.defaultOptions()
      );
      return new anchor.Program(todoIDL, TODO_PROGRAM_PUBKEY, provider);
    }
  }, [connection, anchorWallet]);

  useEffect(() => {
    const getAllUsers = async () => {
      console.log("getalluser");
      if (program && publicKey && !transactionPending) {
        try {
          const [profilePda] = await findProgramAddressSync(
            [utf8.encode("USER_STATE"), publicKey.toBuffer()],
            program.programId
          );
          const userAccount = await program.account.userProfile.fetch(
            profilePda
          );

          if (userAccount) {
            setInitialized(true);

            const allUserAccount = await program.account.userProfile.all();
            setAllUsers(allUserAccount);
            console.log(allUsers);
          } else {
            setInitialized(false);
          }
        } catch (error) {
          console.log(error);
          setInitialized(false);
          setAllUsers([]);
        } finally {
          console.log("Done");
        }
      }
    };
    getAllUsers();
  }, [publicKey, program, transactionPending]);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const genderHandler = (e) => {
    setGender(e.target.value);
  };

  const profileUrlHandler = (e) => {
    setProfileUrl(e.target.value);
  };

  const countryHandler = (e) => {
    setCountry(e.target.value);
    console.log(e.target.value+"coun")
  };

  const descriptionHandler = (e) => {
    setDesription(e.target.value);
    console.log(e.target.value+"desc")
  };

  const initializeUser = async () => {
    if (program && publicKey) {
      try {
        setLoading(true);
        setTransactionPending(true);
        const [profilePda] = findProgramAddressSync(
          [utf8.encode("USER_STATE"), publicKey.toBuffer()],
          program.programId
        );
        if (name && age && gender && profileUrl && country && description) {
          const tx = await program.methods
            .initializeUser(name, age, gender, profileUrl, country, description)
            .accounts({
              userProfile: profilePda,
              authority: publicKey,
              SystemProgram: SystemProgram.programId,
            })
            .rpc();
          setInitialized(true);
          showToast();
          setTimeout(() => {
            window.location.reload();
          }, [2000]);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false);
        setTransactionPending(false);
        setName("");
        setAge("");
        setGender("");
        setProfileUrl("");
        setCountry("")
        setDesription("")
        window.scrollTo({ top: 50, behavior: "smooth" });
      }
    }
  };

  const addFriendfun = async (namef, agef, genderf, urlf, walletadress) => {
    if (program && publicKey) {
      try {
        setTransactionPending(true);
        const [profilePda] = findProgramAddressSync(
          [utf8.encode("USER_STATE"), publicKey.toBuffer()],
          program.programId
        );
        const [addfriend] = findProgramAddressSync(
          [
            utf8.encode("FRIEND_STATE"),
            publicKey.toBuffer(),
            Uint8Array.from([followers]),
          ],
          program.programId
        );
        if (namef && genderf && agef && urlf) {
          await program.methods
            .addFriend(namef, genderf, agef, urlf, walletadress)
            .accounts({
              userProfile: profilePda,
              addFriend: addfriend,
              authority: publicKey,
              SystemProgram: SystemProgram.programId,
            })
            .rpc();
        }
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
  };

  return {
    initialized,
    transactionPending,
    name,
    age,
    gender,
    profileUrl,
    country,
    description,
    nameHandler,
    ageHandler,
    genderHandler,
    profileUrlHandler,
    countryHandler,
    descriptionHandler,
    initializeUser,
    addFriendfun,
    allUsers,
    loading,
    
  };
}
