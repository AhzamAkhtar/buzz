import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";
import { useBuzz } from "../hook/buzz";
import { useEffect, useState } from "react";
import { LoginUtil } from "./LoginUtil";
import {useRouter} from 'next/router'
import Login from "./Login";
const Hero = () => {
  const router = useRouter()
  const { initialized } = useBuzz();
  const {
    loginState,
    turnLoginTrue,
  } = LoginUtil()
  const [disabled, setDisabled] = useState(true);
  const [loginPointer, setLoginPointer] = useState("not-allowed");
  const [diveInPointer, setDiveInPointer] = useState("pointer");
  const [login, setLogin] = useState(false);
  useEffect(() => {
    const check = () => {
      if (initialized == true) {
        setDisabled(false);
        setLoginPointer("not-allowed");
        setDiveInPointer("pointer");
      }
      if (initialized == false) {
        setDisabled(true);
        setLoginPointer("pointer");
        setDiveInPointer("not-allowed");
      }
    };
    check();
  }, [initialized]);
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
          <p>With buzz... </p>
        </h1>
        <div class="flex justify-center">
        <nav>
        
        <button
            onClick={() => turnLoginTrue()}
            class={`bg-white text-black py-4 px-10 rounded-3xl inline-flex items-center mx-10 mt-10 cursor-${loginPointer}`}
            disabled={!disabled}
          >
            <span>LOGIN</span>
            <CiLogin className="ml-1 w-8 text-3xl" />
          </button>
      
        </nav>
          <button
            onClick={()=> router.push("/main")}
            class={`bg-white text-black py-4 px-10 rounded-3xl inline-flex items-center mx-10 mt-10 cursor-${diveInPointer}`}
            disabled={disabled}
          >
            <span>DIVE IN</span>
            <BsArrowRight className="ml-1 w-5 text-3xl" />
          </button>
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

