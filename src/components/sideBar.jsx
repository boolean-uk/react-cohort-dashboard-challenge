import Home from "../assets/home-icon.svg"
import { useContext } from "react";
import { MyContext } from "../App";
import { useNavigate } from 'react-router-dom'
import '.././dashboard.css'

function SideBar(){
    
    const context = useContext(MyContext);
    const navigate = useNavigate();

    return (
        <nav className="sidebar">
            <h1>Side bar</h1>
            <button className="nav-item" onClick={() => navigate('/')}>
            <img src={Home} alt="Home"/>
            </button>
            <p>
            <button className="profile-edit-avatar" onClick={() => navigate('/profile')}>
                <img src={context.user.profileImage}/>
            </button>
            </p>

        </nav>
    )
}
export default SideBar