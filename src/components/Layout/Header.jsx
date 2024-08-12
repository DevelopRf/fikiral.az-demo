import { Link } from "react-router-dom"
import { SearchIcon } from "../icon/SearchIcon"
import { LightIcon } from "../icon/LightIcon"
import { DarkIcon } from "../icon/DarkIcon"
import { ContentLoader } from "../ContentLoader/ContentLoader"
import { IoIosArrowDown } from "react-icons/io";
import { useRef } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { MenuIcon } from "../icon/MenuIcon"
import { Spinner } from "../Spinner/Spinner"
import { MdOutlineClose } from "react-icons/md";
import { SearchBox } from "../SearchBox/SearchBox"
import { BtnLogin } from "../BtnLogin/BtnLogin"
import { SiteLogo } from "../SiteLogo/SiteLogo"
import { HiOutlineArrowSmUp } from "react-icons/hi";
import { LoginRegister } from "../LoginRegister/LoginRegister"

const Header = () => {
    const refCat = useRef()
    const refLang = useRef()
    const refLangMob = useRef()
    const btnSearch = useRef()
    const searchBox = useRef()
    const [btnCat, setBtnCat] = useState(false)
    const [btnLang, setBtnLang] = useState(false)
    const [mobMenu, setMobMenu] = useState(false)

    const refgoUp = useRef()
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark" ? true : false
    )
    const [selectLang, setSelectLang] = useState("Aze")

    const clickCat = () => {
        setBtnCat(!btnCat)
        setBtnLang(false)
    }

    const clickLang = () => {
        setBtnLang(!btnLang)
        setBtnCat(false)
    }

    const toggleBtn = (e) => {
        if (refCat && refLang) {
            if (!refCat.current.contains(e.target)) {
                setBtnCat(false)
            }
            if (!refLang.current.contains(e.target) && !refLangMob.current.contains(e.target)) {
                setBtnLang(false)
            }
        }
    }

    useEffect(() => {
        document.body.addEventListener("click", toggleBtn)
        return () => {
            document.body.removeEventListener("click", toggleBtn)
        }
    }, [])

    const toggleSearch = (e) => {
        e.stopPropagation()
        if (btnSearch.current.contains(e.target)) {
            if (searchBox?.current?.classList?.contains("search-hidden")) {
                searchBox?.current?.classList?.remove("search-hidden")
                searchBox?.current?.classList?.add("search-visible")
            }
        }
        else if (!searchBox.current.contains(e.target)) {
            searchBox?.current?.classList?.remove("search-visible")
            searchBox?.current?.classList?.add("search-hidden")
        }
    }

    useEffect(() => {
        document.body.addEventListener("click", toggleSearch)
        return () => {
            document.body.removeEventListener("click", toggleSearch)
        }
    }, [])

    const changeTheme = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        darkMode ? localStorage.setItem("theme", "dark") : localStorage.setItem("theme", "light")

        if (localStorage.theme === "dark") {
            document.documentElement.classList.add("dark")
            document.body.classList.add("bg-dark")
        }
        else {
            document.documentElement.classList.remove("dark")
            document.body.classList.remove("bg-dark")
        }
    }, [darkMode])

    const toggleMenu = () => {
        setMobMenu(!mobMenu)
    }

    const goUp = () => {
        document.documentElement.scrollTo({ top: 0, behavior: "smooth" })
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            document.documentElement.scrollTop <= 50 ? refgoUp?.current?.classList?.add("btn-go-up") : refgoUp?.current?.classList?.remove("btn-go-up")
        })
    }, [])

    return (
        <header className="bg-lightBg dark:bg-darkBg top-0 z-[9999] sticky w-full">
            <div className={`fixed flex flex-col w-full h-full z-[9999] sm:hidden bg-white dark:bg-darkBg transition-all duration-300 ${mobMenu ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-center py-4">
                    <SiteLogo />
                </div>
                <div className="p-6 h-full relative">
                    <button onClick={() => setMobMenu(false)} className=" overflow-hidden justify-center absolute top-0 left-0 w-9 h-9 bg-[#d1d5db] border-[6px] border-[#d1d5db] rounded-sm rounded-br-[36px] text-[#4b5563]">
                        <MdOutlineClose size={24} />
                    </button>
                    <div className="flex justify-center">
                        <div className="w-[200px] h-[200px]">
                            <Spinner />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between px-6 py-3">
                    <button onClick={changeTheme}>
                        {
                            darkMode ? <DarkIcon /> : <LightIcon />
                        }
                    </button>
                    <button ref={refLangMob} onClick={clickLang} className="relative flex gap-x-2 items-center select-none text-black dark:text-white"> {selectLang}
                        <IoIosArrowDown />
                        <ul className={`${!btnLang ? "btn-toggle" : ""} langs-mob`}>
                            <li className={`lang ${selectLang === "Aze" ? "bg-[#d9d9d9] text-[#1677ff] dark:bg-[#627280] dark:text-white" : ""}`} onClick={() => setSelectLang("Aze")}>Aze</li>
                            <li className={`lang ${selectLang === "En" ? "bg-[#d9d9d9] text-[#1677ff] dark:bg-[#627280] dark:text-white" : ""}`} onClick={() => setSelectLang("En")}>En</li>
                            <li className={`lang ${selectLang === "Ru" ? "bg-[#d9d9d9] text-[#1677ff] dark:bg-[#627280] dark:text-white" : ""}`} onClick={() => setSelectLang("Ru")}>Ru</li>
                        </ul>
                    </button>
                </div>
            </div>
            <div className="layout-container">
                <div className="flex py-3 lg:py-[25px] items-center justify-between gap-y-5 flex-wrap lg:flex-nowrap">
                    <div className="flex items-center w-full relative justify-between md:gap-x-6">
                        <div className="flex items-center lg:gap-x-6">
                            <SiteLogo myStyle="ml-[-30px] sm:ml-[-26px] sm:w-[191px]" />
                            <SearchBox myRef={searchBox} myStyle="hidden md:flex" />
                        </div>
                        <SearchBox myRef={searchBox} myStyle="search-hidden absolute right-0 sm:hidden" />

                        <div className="flex gap-x-4 sm:hidden">
                            <button ref={btnSearch}><SearchIcon /></button>
                            <button onClick={toggleMenu} className="text-black dark:text-white"><MenuIcon /></button>
                        </div>
                        <div className="sm:flex gap-x-4 items-center h-[33px] hidden">
                            <button ref={refCat} onClick={clickCat} className="relative ml-2 select-none hover:text-primary transition-300 text-black dark:text-white"> Kateqoriya
                                <div className={`cats ${!btnCat ? "btn-toggle" : ""}`}>
                                    <ul className="flex flex-col gap-y-4">
                                        <li><ContentLoader width="100%" height={34} className="rounded-md" /></li>
                                        <li><ContentLoader width="100%" height={34} className="rounded-md" /></li>
                                        <li><ContentLoader width="100%" height={34} className="rounded-md" /></li>
                                    </ul>
                                    <ul className="flex flex-col gap-y-5">
                                        <li><ContentLoader width="100%" height={34} className="rounded-md" /></li>
                                        <li><ContentLoader width="100%" height={34} className="rounded-md" /></li>
                                        <li><ContentLoader width="100%" height={34} className="rounded-md" /></li>
                                    </ul>
                                </div>
                            </button>
                            <button onClick={changeTheme}>
                                {
                                    darkMode ? <DarkIcon /> : <LightIcon />
                                }
                            </button>
                            <button ref={refLang} onClick={clickLang} className="relative flex gap-x-2 items-center select-none text-black dark:text-white ml-2"> {selectLang}
                                <IoIosArrowDown />
                                <ul className={`langs-desk ${!btnLang ? "btn-toggle" : ""}`}>
                                    <li className={`lang ${selectLang === "Aze" ? "bg-[#d9d9d9] text-[#1677ff] dark:bg-[#627280] dark:text-white" : ""}`} onClick={() => setSelectLang("Aze")}>Aze</li>
                                    <li className={`lang ${selectLang === "En" ? "bg-[#d9d9d9] text-[#1677ff] dark:bg-[#627280] dark:text-white" : ""}`} onClick={() => setSelectLang("En")}>En</li>
                                    <li className={`lang ${selectLang === "Ru" ? "bg-[#d9d9d9] text-[#1677ff] dark:bg-[#627280] dark:text-white" : ""}`} onClick={() => setSelectLang("Ru")}>Ru</li>
                                </ul>
                            </button>
                        </div>
                    </div>
                    <div className="flex w-full items-center md:justify-end">
                        <SearchBox myStyle="w-full hidden sm:flex md:hidden" />
                        <BtnLogin myStyle="w-full sm:max-w-max flex-shrink-0" />
                    </div>
                </div>
            </div>
            <button ref={refgoUp} onClick={goUp} className="flex justify-center items-center fixed z-[99999] bottom-11 right-5 w-10 h-10 rounded-full shadow-[0_6px_16px_0_#e8e8e8] bg-white transition-all duration-300">
                <HiOutlineArrowSmUp size={26} />
            </button>
            <LoginRegister />
        </header>
    )
}

export default Header