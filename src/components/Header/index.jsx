
import Avatar from "react-avatar"
import './style.css'
import { Link } from "react-router-dom"

function Header({loggedInUser}){

    if(!loggedInUser) return <></>
    return(
        <div className="header"> 
            <img src="src\assets\title-header.svg"/>
            <Link to={'/profile'}> <Avatar className="header-avatar" name={`${loggedInUser.firstName} ${loggedInUser.lastName}`} 
                    round={true} /> 
            </Link>
        </div>
    )
}

export default Header