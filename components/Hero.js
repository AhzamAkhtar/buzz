import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import {CiLogin} from 'react-icons/ci'
import {BsArrowRight} from 'react-icons/bs'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
const Hero = () => {
  return (
    <>
      <div
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image
          src="/pic.jpg"
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
          <h1>With buzz...</h1>
        </h1>
        <div class="flex justify-center">
          <button class="bg-white text-black py-8 px-10 rounded-3xl inline-flex items-center mx-10 mt-10 ">
            <span>LOGIN IN</span>
            <CiLogin className="ml-1 w-8 text-3xl" />
          </button>
          <button class="bg-white text-black py-8 px-10 rounded-3xl inline-flex items-center mx-10 mt-10">
            <span>DIVE IN</span>
            <BsArrowRight  className="ml-1 w-5 text-3xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
