import homeIcon from '../assets/home-icon.svg'
import profileIcon from '../assets/profile-icon.svg'
import { useNavigate } from "react-router-dom";

function Nav() {
    const navigate = useNavigate();

    const goToMain = () => {
        //navigera till dashboard
        navigate('/');
    }

    const goToProfilePage = () => {
        navigate('/profile/1')
    }

    return (
        <nav className="sidebar">
            <img
                className='home-icon'
                src={homeIcon}
                alt="home icon"
                onClick={goToMain} />
            <img
                className='profile-icon'
                src={profileIcon}
                alt="profile icon"
                onClick={goToProfilePage} />
        </nav>
    )
}

export default Nav