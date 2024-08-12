import { useAppContext } from "../../context/Context"
import { FacebookIcon } from "../icon/FacebookIcon"
import { GoogleIcon } from "../icon/googleIcon"

export const LoginRegister = () => {
    const { loginModal, setLoginModal } = useAppContext()

    return (
        <div>
            <div onClick={() => setLoginModal(false)} className={`fixed px-3 bg-[#00000071] z-[99999] inset-0 ${loginModal ? "opacity-100 visible" : "opacity-0 invisible"} transition-all divide-purple-200`}>
                <div className="relative max-w-[650px] rounded-lg px-6 py-5 bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex justify-center pt-7">
                        <form className="secondFont text-[#000000e0]">
                            <div>
                                <label htmlFor="email">Email</label>
                                <div className="px-4 py-[7px]">
                                    <input type="text" name="email" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password"></label>
                                <div className="px-4 py-[7px]">
                                    <input type="password" name="password" />
                                </div>
                                <button className="text-primary">Şifrəni unutmusan?</button>
                            </div>
                            <button className="py-2 bg-primary text-white">Daxil ol</button>
                            <div className="text-sm">
                                <div className="text-base">Və ya</div>
                                <div className="px-4 py-[7px] flex rounded-lg border border-black"><span className="mx-2"><GoogleIcon /></span> <span>Google hesabı ilə davam et</span></div>
                                <div className="px-4 py-[7px] flex rounded-lg border border-black"><span className="mx-2"><FacebookIcon /></span> <span>Facebook hesabı ilə davam et</span></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}