import { useState } from "react";

export function LoginUtil() {
    const [loginState , setLoginState] = useState(false)

    const turnLoginTrue = () => {
        setLoginState(true)
        setTimeout(()=> {
            window.scrollTo(0,600)

        })
    }
    const turnLoginFalse = () => {
        setLoginState(false)
    }

    return {
        loginState,
        turnLoginTrue,
        turnLoginFalse
    }
}