import homeIcon from '../assets/home-icon.svg'
import profileIcon from '../assets/profile-icon.svg'
import { useNavigate } from "react-router-dom";

function Nav() {
    const navigate = useNavigate();

    const goToMain = () => {
        //navigera till dashboard
        navigate('/');
    }

    return (
        <nav className="sidebar red">
            <img
                src={homeIcon}
                alt="home icon"
                onClick={goToMain} />
            <img src={profileIcon} alt="profile icon" />
        </nav>
    )
}

export default Nav