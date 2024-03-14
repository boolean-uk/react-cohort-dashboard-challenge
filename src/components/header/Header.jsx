import "../../styles/Header.css"
import Icon from "../../assets/header-logo.svg"
import ProfilePicture from "../ProfilePicture"
import { UsersContext } from "../../App"
import { useContext } from "react"
import { Link } from "react-router-dom"


function Header() {
    const {currentUser} = useContext(UsersContext)
    if(!currentUser) return <p>Loading ...</p>

    return(
        <div className="header">
            <img src={Icon} alt="header-logo"/>
            <div className="profile-picture">
                <Link to={`/profile/${currentUser.id}`}> 
                    <ProfilePicture 
                        firstName={currentUser.firstName} 
                        lastName={currentUser.lastName} 
                        favouriteColour={currentUser.favouriteColour}/>
                </Link>
            </div>
        </div>
    )
}

export default Header   