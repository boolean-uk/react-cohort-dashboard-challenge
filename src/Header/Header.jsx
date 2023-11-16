import HeaderLogo from "../Header/HeaderLogo.svg"
import ProfileIcon from "./ProfileIcon"
import StyleHeader from "./StyleHeader.css"
import {Link} from "react"




function Header() {
    return(
        <div className="image"> 
           <img src={HeaderLogo} alt="logo" width='300px' />
           <ProfileIcon/>
        </div>


    )
}

export default Header