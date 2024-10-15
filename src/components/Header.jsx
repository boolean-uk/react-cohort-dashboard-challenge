import titleHeader from "../assets/title-header-svg.svg"
import ColouredCircle from "./ColouredCircle"
import "../styling/ColouredCircle.css"
import { useContext } from "react"
import { UserContext } from "../App"
import { Link } from "react-router-dom"

function Header() {
    const { userLoggedIn } = useContext(UserContext)
    return (
        <div className="header">
            <div className="header_profile">
                <img src={titleHeader} alt="Title header" id="title_header"/>
            </div>
            <Link to="/profile">
                <ColouredCircle firstName={userLoggedIn.firstName} lastName={userLoggedIn.lastName} color={userLoggedIn.favouriteColour}/>
            </Link>
        </div>
    )
}

export default Header