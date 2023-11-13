import HomeIcon from "./HomeIcon"
import UserIcon from "./UserIcon"
import "./Navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>

            <div className="icon">
                <Link to="/home">
                    <HomeIcon />
                </Link>
            </div>
            <div className="icon">
                <UserIcon />
            </div>
        </>
    )
}

export default Navbar