import logo from "../../assets/images/header.svg"
import Pfp from "./subcomponents/profilepicture";

function Header() {
    return (
        <>
        <header className="header">
            <img className="logo" src={logo} height="100px" alt="log"/>
            <Pfp/>
        </header>
        
        </>
    )
}

export default Header;