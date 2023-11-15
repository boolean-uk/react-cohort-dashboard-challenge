import HeaderLogo from "../Header/HeaderLogo.svg"
import StyleHeader from "./StyleHeader.css"
import {Link} from "react"



function Header() {
    return(
        <div className="image"> 
           <img src={HeaderLogo} alt="logo" width='300px' />
        </div>


    )
}

export default Header