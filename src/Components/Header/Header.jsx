import AccountOptions from "../AccountIcon/AccountIcon"
import DashboardImage from "./DashboardImage/DashboardImage"
import "./Header.css"


const Header = () => {
    return (
        <nav className="header-container">
            <div className="component-container">
            <DashboardImage/>
            <AccountOptions />
            </div>
        </nav>
    )
}

export default Header