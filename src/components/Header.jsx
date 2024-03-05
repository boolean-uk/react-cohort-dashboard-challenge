import Logo from "./Logo";
import "../styles/Header.css";
import ProfileImage from "./ProfileImage";
export default function Header() {
    return (
        <div className="headerContainer">
            <Logo />
            <ProfileImage w={50} h={50} marginR={60} />
        </div>
    )
}