import { useAppContext } from "../../context/Context"
import { CgClose } from "react-icons/cg";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { res, validate } from "react-email-validator";
import { useEffect } from "react";

export const LoginRegister = () => {
    const { loginModal, setLoginModal, logReg, setIsValidEmail, setPassword, setUserName, setEmail} = useAppContext()

    const emailValidation = (e) => {
        const emailValid = validate(e.target.value)
        setIsValidEmail(emailValid)
        setEmail(e.target.value)
    }

    const reset = () => {
        setIsValidEmail(false)
        setLoginModal(false)
        setUserName("")
        setPassword("")
        setEmail("")
    }

    return (
        <div>
            <div onClick={reset} className={`fixed px-3 bg-[#00000071] z-[99999] inset-0 ${loginModal ? "opacity-100 visible" : "opacity-0 invisible"} transition-all divide-purple-200`}>
                <div onClick={(e) => e.stopPropagation()} className={`relative max-w-[650px] rounded-[20px] shadow transition-all duration-300 px-6 pt-12 pb-8 bg-white -translate-x-1/2 -translate-y-1/2 ${!loginModal ? "scale-0 left-[80%] top-[10%]" : "left-1/2 top-1/2"}`}>
                    <div className="flex justify-center">
                        {
                            logReg === "login" && <LoginForm handleChange={emailValidation} /> || logReg === "register" && <RegisterForm handleChange={emailValidation} />
                        }
                    </div>
                    <button onClick={() => setLoginModal(false)} className="absolute right-6 top-5 w-6 h-6 flex items-center justify-center bg-[#e5e7eb] rounded-full">
                        <CgClose />
                    </button>
                </div>
            </div>
        </div>
    )
}