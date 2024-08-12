import { Link } from "react-router-dom"
import logo from "/image/logo.svg"

export const SiteLogo = ({ myStyle }) => {
    return (
        <div className={`w-[171px] h-[43px] ${myStyle ? myStyle : ""}`}>
            <Link to="/">
                <img className="object-cover w-full h-full" src={logo} alt="fikiral" />
            </Link>
        </div>
    )
}