import { useContext } from "react";
import { MyContext } from "../App";
import Logo from "../assets/title-header.svg"
function Header(){

    const context = useContext(MyContext)

    return (
    <header className="header blue">
        <div className="header-logo">
            <img src={Logo} alt="Cohort Manager" />
            </div>
            <div className="profile-icon">
                {/* Make this link to profile page */}
            <img src={context.user.profileImage}/>
            </div>
        </header>
    )
    
}
export default Header