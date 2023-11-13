import HomeIcon from "./HomeIcon"
import UserIcon from "./UserIcon"
import "./Navbar.css"

function Navbar() {
    return (
        <>
            <div className="icon">
                <HomeIcon />
            </div>
            <div className="icon">
                <UserIcon />
            </div>
        </>
    )
}

export default Navbar