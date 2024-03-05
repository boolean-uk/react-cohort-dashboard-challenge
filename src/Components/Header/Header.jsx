import AccountOptions from "./AccountOptions/AccountOptions"
import DashboardImage from "./DashboardImage/DashboardImage"
import "./Header.css"


const Header = () => {
    return (
        <nav className="header-container">
            <DashboardImage/>
            <AccountOptions />
        </nav>
    )
}

export default Header