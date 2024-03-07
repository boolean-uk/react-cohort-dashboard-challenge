import "./styles.css"
import headerLogo from "../../assets/header-logo.svg"


export default function Header() {

    return (
        <header className="header">
            <img className="header-logo" src={headerLogo}/>
            
        </header>
    )
}