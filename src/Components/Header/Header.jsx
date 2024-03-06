import AccountIcon from "../AccountIcon/AccountIcon"
import DashboardImage from "./DashboardImage/DashboardImage"
import "./Header.css"
import { useContext } from 'react'
import { userContext } from '@/Utils/contexts'

const Header = () => {
    const { LoggedInUser } = useContext(userContext)
    return (
        <nav className="header-container">
            <div className="component-container">
            <DashboardImage/>
            <AccountIcon user={LoggedInUser} />
            </div>
        </nav>
    )
}

export default Header