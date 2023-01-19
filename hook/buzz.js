import * as anchor from "@project-serum/anchor";
import { useEffect, useMemo, useState } from "react";
import { TODO_PROGRAM_PUBKEY } from "../constants";
import todoIDL from "../constants/buzz.json";
import { toast, ToastContainer } from "react-toastify";
import { PublicKey, SystemProgram } from "@solana/web3.js";
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

  const [currentUser , setCurrentUser] = useState([])
  const [currentUserUrl , setCurrentUserUrl] = useState([])
  const [allUsers, setAllUsers] = useState([]);
  const [allFriend , setAllFriends] = useState([])
  const [allStatus , setAllStatus] = useState([])
  const [myStatus , setMyStatus] = useState([])
  const [allvideo , setAllVideo] = useState([])
  const [initialized, setInitialized] = useState(false);
  const [transactionPending, setTransactionPending] = useState(false);

  const [followers, setFollowers] = useState(0);
  const [statusindex , setStatusIndex] = useState(0)
  const [videoIndex,setVideoIndex] = useState(1)
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [profileUrl, setProfileUrl] = useState();
  const [country, setCountry] = useState();
  const [description, setDesription] = useState();
  const [loading, setLoading] = useState(false)
  const [status , setStatus] = useState()

  const [videoDiscription , setVideoDiscription] = useState()
  const [videoUrl , setVideoUrl] = useState()

  const [peopleLoading , setPeopleLoading] = useState(false)
  const [videoLoading , setVideoLoading] = useState(false)

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

  const showToastForVideo = () => {
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
            setCurrentUser(userAccount.name)
            setCurrentUserUrl(userAccount.profileUrl)
            console.log(currentUser)
            setFollowers(userAccount.totalFriend)
            setStatusIndex(userAccount.statusIndex)
            setVideoIndex(userAccount.videoIndex)

            setPeopleLoading(true)
            const allUserAccount = await program.account.userProfile.all();
            setAllUsers(allUserAccount);
            setPeopleLoading(false)
            
            setVideoLoading(true)
            const allVideo = await program.account.videoAccount.all()
            setAllVideo(allVideo)
            setVideoLoading(false)

            const allStatusAccount = await program.account.statusAccount.all()
            const myStatus = await program.account.statusAccount.all([authorFilter(publicKey.toString())])
            const allfriends = await program.account.friendAccount.all([authorFilter(publicKey.toString())])


            
            setAllStatus(allStatusAccount)
            setAllFriends(allfriends)
            setMyStatus(myStatus)
            //console.log(allUsers);
            console.log(allvideo)
          } else {
            setInitialized(false);
          }
        } catch (error) {
          console.log(error);
          setInitialized(false);
          setAllUsers([]);
        } finally {
          //console.log("Done");
        }
      }
    };
    getAllUsers();
  }, [publicKey, program, transactionPending,currentUser]);

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

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  const videoDiscriptionHandler = (e) => {
    setVideoDiscription(e.target.value)
  }

  const videoUrlHandler = (e) => {
    setVideoUrl(e.target.value)
  }

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

  const addFriendfun = async (namef, agef, genderf, urlf, descriptionf,countryf) => {
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
        if (namef && genderf && agef && urlf && descriptionf && countryf) {
          await program.methods
            .addFriend(namef, genderf, agef, urlf, descriptionf , countryf)
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
        setStatus("")
        setTransactionPending(false)
      }
    }
  };

  const addStatus = async () => {
    if(program && publicKey){
      try{
        setLoading(true)
        setTransactionPending(true)
        const [profilePda] = findProgramAddressSync(
          [utf8.encode('USER_STATE'),publicKey.toBuffer()],
          program.programId
        )
        const [statusPda] = findProgramAddressSync(
          [utf8.encode("STATUS_STATE"),publicKey.toBuffer(),Uint8Array.from([statusindex])],
          program.programId
        )
        if (status , currentUser , currentUserUrl) {
          await program.methods.addStatus(status,currentUser,currentUserUrl)
          .accounts({
            userProfile : profilePda,
            statusAccount : statusPda,
            authority : publicKey,
            SystemProgram : SystemProgram.programId
          })
          .rpc()
        }
      } catch (error){
        setTransactionPending(false)
        console.log(error)
        setLoading(false)
      } finally {
        setStatus("")
        setTransactionPending(false)
        setLoading(false)
      }
    }
  }

  const addVideo = async () => {
    //const randomKey = anchor.web3.Keypair.generate().publicKey
    if(program && publicKey){
      try{
        setLoading(true)
        setTransactionPending(true)
        const [profilePda] = findProgramAddressSync(
          [utf8.encode("USER_STATE"),publicKey.toBuffer()],
          program.programId
        )
        const [videoPda] = findProgramAddressSync(
          [utf8.encode("VIDEO_STATE") , publicKey.toBuffer(),Uint8Array.from([videoIndex])],
          program.programId
        )
        if(videoUrl,currentUser,videoDiscription,currentUserUrl){
          await program.methods.createVideo(videoUrl,currentUser,videoDiscription,currentUserUrl)
          .accounts({
            userProfile : profilePda,
            videoAccount : videoPda,
            authority : publicKey,
            SystemProgram : SystemProgram.programId
          })
          .rpc()
          showToastForVideo()
          setTimeout(()=>{
            window.location.reload()
          },3000)
        }
      } catch (error) {
        console.log(error)
        setLoading(false)
        setTransactionPending(false)
      }  finally {
        setLoading(false)
        setTransactionPending(false)
        setVideoDiscription("")
        setVideoUrl("")
      }
    }
  }

  return {
    initialized,
    transactionPending,
    name,
    age,
    gender,
    profileUrl,
    country,
    description,
    status,
    videoDiscription,
    videoUrl,
    statusHandler,
    nameHandler,
    ageHandler,
    genderHandler,
    profileUrlHandler,
    countryHandler,
    descriptionHandler,
    videoDiscriptionHandler,
    videoUrlHandler,
    initializeUser,
    addFriendfun,
    addStatus,
    addVideo,
    allUsers,
    allFriend,
    allStatus,
    myStatus,
    allvideo,
    loading,
    videoLoading,
    peopleLoading,
    currentUser
  };
}
