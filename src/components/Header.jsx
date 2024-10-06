import { useContext } from "react";
import Logo from "../assets/title-header.svg" 
import '../styling/header.css'
import Icon from "./profile/Icon";
import { UserContext } from "../App";

const Header = () => {

    const { userDetails } = useContext(UserContext);
    
    return (
        <header className="header">
            <div className="header-left">
                <img src={Logo} className="logo"/>
            </div>
            <div className="header-right">
                <Icon contact={userDetails}/>
            </div>
        </header>
    )
}

export default Header;