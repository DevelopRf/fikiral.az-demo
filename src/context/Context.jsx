import { useContext, createContext, useState } from "react";

const Context = createContext()

export const ContextProvider = ({ children }) => {
    const [loginModal, setLoginModal] = useState()
    const [logReg, setLogReg] = useState(false)
    const [visiblePassword, setVisiblePassword] = useState(false)

    const showPassword = () => {
        setVisiblePassword(!visiblePassword)
    }
    
    const sharedState = { setLoginModal, loginModal, logReg, setLogReg, visiblePassword, setVisiblePassword, showPassword }

    return (
        <Context.Provider value={sharedState}>
            {children}
        </Context.Provider>
    )

}

export function useAppContext() {
    return useContext(Context)
}