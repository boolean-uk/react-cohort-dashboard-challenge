import "../styles/Header.css"
import Icon from "../assets/header-logo.svg"


function Header() {
    return(
        <div className="header">
            <img src={Icon} alt="header-logo"/>
        </div>
    )
}

export default Header