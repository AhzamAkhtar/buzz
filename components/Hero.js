import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";
import { useBuzz } from "../hook/buzz";
import { useEffect, useState } from "react";
import { LoginUtil } from "./LoginUtil";
import { useRouter } from "next/router";
import Login from "./Login";
import dynamic from "next/dynamic";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
const Hero = () => {
  const WalletMultiButtonDynamic = dynamic(
    async () =>
      (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
    { ssr: false }
  );
  const { publicKey } = useWallet();
  const router = useRouter();
  const { initialized } = useBuzz();
  const { loginState, turnLoginTrue } = LoginUtil();
  const [isPublicKey, setPublicKey] = useState(false);
  useEffect(() => {
    const check = () => {
      if (publicKey) {
        setPublicKey(true);
      }
    };
    check();
  }, [publicKey]);
  return (
    <>
      <div id="top">
        <div
          style={{
            zIndex: -1,
            position: "fixed",
            width: "100vw",
            height: "100vh",
          }}
        >
          <Image
            src="/2.jpg"
            className="rounded-3xl"
            alt="Mountains with snow"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <h1
            style={{
              paddingTop: "20vh",
              fontFamily: "monospace",
              fontSize: "3.5rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Start a New Journey
            <p>With buzz... </p>
          </h1>
          <div class="flex justify-center">
            {isPublicKey ? (
              <>
                {initialized ? (
                  <>
                    <button
                      onClick={() => router.push("/main")}
                      class={`md:mr-5 bg-white text-black py-4 px-10 rounded-3xl inline-flex items-center mx-10 mt-10 `}
                    >
                      <span>DIVE IN</span>
                      <BsArrowRight className="ml-1 w-5 text-3xl" />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => turnLoginTrue()}
                      class={`md:ml-5 bg-white text-black py-4 px-10 rounded-3xl inline-flex items-center mx-10 mt-10 `}
                    >
                      <span>LOGIN</span>
                      <CiLogin className="ml-1 w-8 text-3xl" />
                    </button>
                  </>
                )}
              </>
            ) : (
              <>
                <WalletMultiButtonDynamic
                  style={{
                    marginRight: "10px",
                    borderRadius: "50vw",
                  }}
                />
              </>
            )}
          </div>
          {loginState ? (
            <>
              <Login />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
