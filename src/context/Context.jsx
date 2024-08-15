import { useRef } from "react";
import { useEffect } from "react";
import { useContext, createContext, useState } from "react";

const Context = createContext()

export const ContextProvider = ({ children }) => {
    const [loginModal, setLoginModal] = useState()
    const [logReg, setLogReg] = useState(false)
    const [visiblePassword, setVisiblePassword] = useState(false)
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [isValidEmail, setIsValidEmail] = useState(false)

    const showPassword = () => {
        setVisiblePassword(!visiblePassword)
    }

    const sharedState = { setLoginModal, loginModal, logReg, setLogReg, visiblePassword, setVisiblePassword, showPassword, userName, setUserName, password, setPassword, isValidEmail, setIsValidEmail, email, setEmail }

    return (
        <Context.Provider value={sharedState}>
            {children}
        </Context.Provider>
    )

}

export function useAppContext() {
    return useContext(Context)
}