
import { Link } from "react-router-dom"

import "./Header.css"
import Avatar from "../Avatar"
import logo from "./assets/title-header.svg"

export default function Header() {

    return <>
        <div className="header-wrapper">
            <div className="logo-wrapper">
                <img src={logo} alt="logo" />
            </div>
            <div className="Avatar-wrapper">
                <Link to="/Profile">
                    <Avatar nameInitials={'JN'} />
                </Link>
            </div>
        </div>
    </>
}