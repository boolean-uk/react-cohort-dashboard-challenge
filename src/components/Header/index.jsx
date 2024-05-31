import { useContext } from "react"
import { Link } from "react-router-dom"

import { MyContext } from "../../App.jsx"
import "./Header.css"
import Avatar from "../Avatar"
import logo from "./assets/title-header.svg"

export default function Header() {
    const { user } = useContext(MyContext)
    return <>
        <div className="header-wrapper">
            <div className="logo-wrapper">
                <img src={logo} alt="logo" />
            </div>
            <div className="avatar-wrapper">
                <Link to="/profile" state={{ user: user }}>
                    <Avatar nameInitials={user.firstName[0] + "" + user.lastName[0]} />
                </Link>
            </div>
        </div>
    </>
}