import { useAppContext } from "../../context/Context"
import { FacebookIcon } from "../icon/FacebookIcon"
import { GoogleIcon } from "../icon/googleIcon"
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";

export const RegisterForm = ({ handleChange }) => {
    const { setLogReg, showPassword, visiblePassword, userName, setUserName, setPassword, password, isValidEmail, email } = useAppContext()

    const enable = userName && password && password.length >= 8 && isValidEmail

    return (
        <form className="secondFont text-[#000000e0] flex flex-col gap-y-2 w-[300px]">

            <h2 className="text-center">Fikiral-a xoş gəlmisiz!</h2>
            <div>
                <label htmlFor="user-name" className="mb-1 block">İstifadəçi adı</label>
                <div className="px-4 py-[7px] bg-[#f6f7fb] border border-[#999999] rounded-lg">
                    <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" name="user-name" id="user-name" placeholder="İstifadəçi adı" className="bg-transparent w-full outline-none" />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="mb-1 block">Email</label>
                <div className="px-4 py-[7px] bg-[#f6f7fb] border border-[#999999] rounded-lg">
                    <input value={email} onChange={handleChange} type="email" name="email" id="email" placeholder="Email daxil edin" className="bg-transparent w-full outline-none" />
                </div>
            </div>
            <div>
                <label htmlFor="password" className="mb-1 block">Şifrə</label>
                <div className="px-4 py-[7px] flex bg-[#f6f7fb] border border-[#999999] rounded-lg">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type={`${visiblePassword ? "text" : "password"}`} name="password" id="password" placeholder="Şifrəni daxil edin" className="bg-transparent w-full outline-none" />
                    <button type="button" onClick={showPassword}><LuEye className={`${visiblePassword ? "block" : "hidden"}`} /> <LuEyeOff className={`${visiblePassword ? "hidden" : "block"}`} /></button>
                </div>
                <button type="button" className="text-primary mt-1">Şifrəni unutmusan?</button>
            </div>
            <button type="submit" disabled={!enable} className={`py-2 bg-primary text-white rounded-lg ${!enable ? "opacity-40" : "opacity-100"}`}>
                Qeydiyyat
            </button>
            <div className="text-center">Və ya</div>
            <div className="flex flex-col gap-y-2 text-sm">
                <button type="button" className="px-4 py-[7px] flex justify-center rounded-lg bg-[#f6f7fb] border border-[#999999]">
                    <span className="mx-2"><GoogleIcon /></span> <span>Google hesabı ilə davam et</span>
                </button>
                <button type="button" className="px-4 py-[7px] flex justify-center rounded-lg bg-[#f6f7fb] border border-[#999999]">
                    <span className="mx-2"><FacebookIcon /></span> <span>Facebook hesabı ilə davam et</span>
                </button>
                <div className="flex gap-x-1 justify-center"><span>Artıq hesabın var? <button onClick={() => setLogReg("login")} type="button" className="text-primary">Daxil ol</button></span></div>
            </div>
        </form>
    )
}