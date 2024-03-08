import { useContext } from "react";
import { MyContext } from "../App";
import { useNavigate } from 'react-router-dom'
import Logo from "../assets/title-header.svg"
import '.././dashboard.css'

function Header(){

    const context = useContext(MyContext)
    const navigate = useNavigate();

    return (
    <header className="header">
        <button className="header-logo">
            <img src={Logo} alt="Cohort Manager" onClick={() => navigate('/')}/>
            </button>
        <button className="profile-pic" onClick={() => navigate('/profile')}>
            <img src={context.user.profileImage}/>
            </button>
        </header>
    )
    
}
export default Header