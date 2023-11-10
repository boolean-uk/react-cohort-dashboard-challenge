import logo from "../../assets/images/header.svg"
import Pfp from "./subcomponents/profilepicture";

function Header() {
    return (
        <>
        <div className="header">
            <header>
                <img src={logo} height="100px" alt="header"/>
                <Pfp/>
            </header>
        </div>
        
        </>
    )
}

export default Header;