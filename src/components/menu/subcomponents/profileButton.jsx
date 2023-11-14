import { Link } from "react-router-dom";
import profileIcon from '../assets/profile-icon.svg'

function ProfileButton() {
    return (
        <>
        <Link to="/">
            <li className="button">
                    <div className="wrapper">
                        <img src={profileIcon} alt="profile"/>
                        <p>Profile</p>
                    </div>
            </li>
        </Link>
        </>
    )
}

export default ProfileButton;