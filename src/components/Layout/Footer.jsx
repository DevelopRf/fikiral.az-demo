import { SiteLogo } from "../SiteLogo/SiteLogo"
import { Link } from "react-router-dom"
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TbChevronRight } from "react-icons/tb";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { CgClose } from "react-icons/cg";

const Footer = () => {
    const [openFaq, setOpenFaq] = useState(null)
    const [showFaq, setShowFaq] = useState(false)
    const refFaq = useRef()

    const getFaq = (index) => {
        if (openFaq === index) {
            return setOpenFaq(null)
        }
        setOpenFaq(index)
    }

    useEffect(() => {
        !showFaq ? document.body.classList.remove("overflow-hidden") : document.body.classList.add("overflow-hidden")
    }, [showFaq])

    return (
        <footer className="mt-[100px] py-5 bg-[#e7e8f1]">
            <div className="layout-container">
                <div className="flex justify-between gap-x-20 border-b border-black pb-2 flex-wrap gap-y-5">
                    <div className="w-full flex sm:max-w-max sm:block justify-center"><SiteLogo myStyle="sm:w-[191px] ml-[-30px]" /></div>
                    <div className="flex flex-col gap-y-2">
                        <h6 className="text-sm font-semibold">Haqqımızda</h6>
                        <Link to="about" className="text-xs">Fikiral</Link>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h6 className="text-sm font-semibold">Dəstək</h6>
                        <Link onClick={() => setShowFaq(true)} to="#" className="text-xs">Tez-tez verilən suallar</Link>
                        <Link to="privacy-policy" className="text-xs">Məxfilik qaydaları</Link>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h6 className="text-sm font-semibold">Əlaqə</h6>
                        <Link to="mailto:info@fikiral.az" className="text-xs">info@fikiral.az</Link>
                        <div className="flex gap-x-4 items-center">
                            <Link to="#" className="hover:text-primary"><FaInstagram size={20} /></Link>
                            <Link to="#" className="hover:text-primary"><FaLinkedinIn size={20} /></Link>
                            <Link to="#" className="hover:text-primary"><FaFacebookF size={20} /></Link>
                            <Link to="#" className="hover:text-primary"><BsTwitterX size={20} /></Link>
                        </div>
                    </div>
                </div>
                <span className="text-sm">&copy 2024 Fikiral</span>
            </div>
            <div onClick={() => setShowFaq(false)} className={`fixed px-3 bg-[#00000071] z-[99999] inset-0 ${showFaq ? "opacity-100 visible" : "opacity-0 invisible"} transition-all divide-purple-200`}>
            <div ref={refFaq} onClick={(e)=>e.stopPropagation()} className={`relative -translate-x-1/2 -translate-y-1/2 max-w-[800px] rounded-lg bg-white px-6 pt-5 pb-8 shadow origin-bottom transition-all duration-300 ${!showFaq ? "scale-0 top-[60%] left-[60%]" : "top-1/2 left-1/2"}`}>
                <h2 className="text-xl secondFont font-semibold mb-2">Tez-tez verilən suallar</h2>
                <div className="border-t border-l border-r border-[#e5e5e5] overflow-hidden rounded-tl-lg rounded-tr-lg">
                    <div onClick={() => getFaq(0)} className={`px-4 py-3 ${openFaq === 0 ? "border-b" : "border-b-0"} cursor-pointer border-[#e5e5e5] flex items-start gap-x-3`}>
                        <div><TbChevronRight size={20} className={`${openFaq === 0 ? "rotate-90" : ""} transition-all duration-300`} /></div>
                        Bu saytda biznes ideyamı paylaşmağın mənə nə faydası var?
                    </div>
                    <div className={`${openFaq === 0 ? "p-4 visible opacity-100 max-h-[150px]" : " p-0 invisible opacity-0 max-h-0"} transition-all duration-300`}>
                        Biznes ideyanızı paylaşaraq təkmilləşdirməyə kömək edə biləcək digər istifadəçilərdən rəy, və məsləhət almağa, tələbi müəyyən etməyə dəstək olacaqdır. Həmçinin potensial partnyorları, investorları və ya müştəriləri cəlb edə, biznes ictimayyətində nüfuzunuzu gücləndirə və əlaqələrin qurulmasına kömək edə bilər.
                    </div>
                </div>
                <div className="border-t border-l border-r border-[#e5e5e5] overflow-hidden">
                    <div onClick={() => getFaq(1)} className={`px-4 py-3 ${openFaq === 1 ? "border-b" : "border-b-0"} cursor-pointer border-[#e5e5e5] flex items-start gap-x-3`}>
                        <div><TbChevronRight size={20} className={`${openFaq === 1 ? "rotate-90" : ""} transition-all duration-300`} /></div>
                        Mənim biznes ideyamın bu platformada qanunsuz surətdə təkrarlandığından və ya istifadə edildiyindən şübhələnirəmsə, mənim hansı müraciətim ola bilər?
                    </div>
                    <div className={`${openFaq === 1 ? "p-4 visible opacity-100 max-h-[150px]" : " p-0 invisible opacity-0 max-h-0"} transition-all duration-300`}>
                        Əgər biznes ideyanızı saytımızda paylaşdıqdan sonra oğurlandığını və ya təkrarlandığını aşkar etsəniz, ilk növbədə əqli mülkiyyət və müəllif hüquqlarının qorunması üzrə ixtisaslaşmış hüquq məsləhətçisi və ya vəkillə əlaqə saxlamalısınız. Onlar vəziyyəti qiymətləndirdirdikdən sonra hüquqlarınızı qorumağa kömək edə biləcəklər. Bu kimi halların baş verməməsi üçün biznes ideyanızı həyata keçirtmək üçün ən vacib olan nüansları qeyd etməməyə çalışın.
                    </div>
                </div>
                <div className="border-t border-l border-r border-[#e5e5e5] overflow-hidden">
                    <div onClick={() => getFaq(2)} className={`px-4 py-3 ${openFaq === 2 ? "border-b" : "border-b-0"} cursor-pointer border-[#e5e5e5] flex items-start gap-x-3`}>
                        <div><TbChevronRight size={20} className={`${openFaq === 2 ? "rotate-90" : ""} transition-all duration-300`} /></div>
                        Mən bu veb saytdan biznes ideyamı yeniləyə və ya silə bilərəmmi və bunun üçün hansı prosedurlar var?
                    </div>
                    <div className={`${openFaq === 2 ? "p-4 visible opacity-100 max-h-[150px]" : " p-0 invisible opacity-0 max-h-0"} transition-all duration-300`}>
                        Əlbətdə, fikir paylaşan istifadəçilər istənilən vaxt, şəxsi paylaşımlarının üst sağ hissəsində yerləşən 3 nöqtəyə daxil olub, fikri silə və düzəliş edə bilərlər.
                    </div>
                </div>
                <div className="border border-[#e5e5e5] rounded-bl-lg rounded-br-lg overflow-hidden">
                    <div onClick={() => getFaq(3)} className={`px-4 py-3 ${openFaq === 3 ? "border-b" : "border-b-0"} cursor-pointer border-[#e5e5e5] flex items-start gap-x-3`}>
                        <div><TbChevronRight size={20} className={`${openFaq === 3 ? "rotate-90" : ""} transition-all duration-300`} /></div>
                        Bu platformada öz biznes ideyalarını paylaşan istifadəçilərin uğur hekayələri və ya rəyləri varmı?
                    </div>
                    <div className={`${openFaq === 3 ? "p-4 visible opacity-100 max-h-[150px]" : " p-0 invisible opacity-0 max-h-0"} transition-all duration-300`}>
                        Uğur hekayələri rubrikamız rəsmi social şəbəkə platformalarımızda mütəmadi olaraq paylaşılır.
                    </div>
                </div>
                <button onClick={() => setShowFaq(false)} className="absolute right-6 top-5 w-6 h-6 flex items-center justify-center bg-[#e5e7eb] rounded-full">
                    <CgClose />
                </button>
            </div>
            </div>
        </footer>
    )
}

export default Footer