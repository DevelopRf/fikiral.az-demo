import { useAppContext } from "../../context/Context"

export const BtnLogin = ({ myStyle }) => {

    const { setLoginModal, setLogReg } = useAppContext()

    return (
        <div className={`flex justify-between sm:gap-x-3 ${myStyle ? myStyle : ""}`}>
            <button onClick={() => { setLogReg("login"), setLoginModal(true) }} className="px-[40px] py-2 sm:px-4 text-primary border rounded-xl border-primary sm:border-transparent sm:hover:border-primary whitespace-nowrap">Daxil ol</button>
            <button onClick={() => { setLogReg("register"), setLoginModal(true) }} className="px-[40px] py-2 sm:px-4 bg-primary text-white rounded-xl">Qeydiyyat</button>
        </div>
    )
}