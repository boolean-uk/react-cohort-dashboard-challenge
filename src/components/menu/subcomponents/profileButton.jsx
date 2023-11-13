import { Link } from "react-router-dom";
import profileIcon from '../assets/profile-icon.svg'

function ProfileButton() {
    return (
        <>
            <li className="button">
                <Link to="/">
                    <div className="wrapper">
                        <img src={profileIcon} alt="profile"/>
                        <p>Profile</p>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default ProfileButton;