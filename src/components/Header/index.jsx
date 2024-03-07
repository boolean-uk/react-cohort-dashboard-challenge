import { useContext } from "react"
import Avatar from "react-avatar"
import { AppContext } from "../../App"

function Header({loggedInUser}){

    if(!loggedInUser) return <></>
    return(
        <div className="header">
            <img src="src\assets\title-header.svg"/>
            <Avatar className="header-avatar" name={`${loggedInUser.firstName} ${loggedInUser.lastName}`} 
                    round={true} />
        </div>
    )
}

export default Header