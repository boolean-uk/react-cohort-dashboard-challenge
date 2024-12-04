import HeaderLogo from "./Logo"
import "../Header/Header.css"
import ProfileLogo from "../SharedIcons/ProfileLogo"
import { AppContext } from "../../../App"
import { useContext } from "react"

export default function Header() {
    const { loggedInUser } = useContext(AppContext)
    return (

        <header className="header">
            <div className="header-logo">
                <HeaderLogo />
            </div>

            <div className="profile-logo-header">
                <p className="inital-logo-header">{loggedInUser.firstName.charAt(0)}{loggedInUser.lastName.charAt(0)}</p>
                
            </div>
                

         
        </header>
    )
}