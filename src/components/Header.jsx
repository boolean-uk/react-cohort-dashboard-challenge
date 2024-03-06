import Logo from "./Logo";
import "../styles/Header.css";
import ProfileImage from "./ProfileImage";
import { useContext } from "react";
import { UserContext } from "../App";
export default function Header() {
    const user = useContext(UserContext);
    return (
        <div className="headerContainer">
            <Logo />
            <ProfileImage user={user} w={50} h={50} marginR={60} />
        </div>
    )
}