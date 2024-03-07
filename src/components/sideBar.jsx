import Home from "../assets/home-icon.svg"
import { useContext } from "react";
import { MyContext } from "../App";
import { useNavigate } from 'react-router-dom'

function SideBar(){
    
    const context = useContext(MyContext);
    const navigate = useNavigate();

    return (
        <nav className="sidebar red">
            <h1>Side bar</h1>
            <button className="sidebar-icons" onClick={() => navigate('/')}>
            <img src={Home} alt="Home"/>
            </button>
            <p>
            <button className="sidebar-icons" onClick={() => navigate('/profile')}>
                <img src={context.user.profileImage}/>
            </button>
            </p>

        </nav>
    )
}
export default SideBar