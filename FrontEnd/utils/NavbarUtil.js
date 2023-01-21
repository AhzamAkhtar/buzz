import { useState, useEffect } from "react";
import { useBuzz } from "../hook/buzz";
import { useRouter } from "next/router";
export function NavbarUtil() {
  const router = useRouter();

  const { initialized } = useBuzz();
  const [word, setWord] = useState(false);
  const [home,setHome] = useState(false)
  useEffect(() => {
    const manageState = () => {
      if (initialized == true) {
        setWord("DIVE IN");
      }
      if (initialized == false) {
        setWord("Create Your Account");
      }
      if(router.asPath=="/main" || router.asPath=="/upload" || router.asPath=="/myspace"){
        setWord("HOME")
        setHome(true)
      }
    };
    manageState();
  }, [initialized , router.asPath]);

  return {
    word,
    home
  };
}
