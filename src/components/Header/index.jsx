import "./styles.css"
import headerLogo from "../../assets/header-logo.svg"
import UserIcon from "../UserIcon"
import { useContext } from "react"
import { LoggedInUserContext } from "@/App"


export default function Header() {
    const { loggedInUser } = useContext(LoggedInUserContext)

    return (
        <header className="header">
            <img className="header-logo" src={headerLogo}/>
            <UserIcon firstName={loggedInUser.firstName} lastName={loggedInUser.lastName} color={loggedInUser.favouriteColour}/>
        </header>
    )
}