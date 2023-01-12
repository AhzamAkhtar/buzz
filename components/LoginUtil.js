import { useState } from "react";

export function LoginUtil() {
    const [loginState , setLoginState] = useState(false)

    const turnLoginTrue = () => {
        setLoginState(true)
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