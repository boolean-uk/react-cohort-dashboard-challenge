import '../../../../assets/css/LeftMenu.css'
import '../../../../assets/css/All.css'
import HomeIcon from '../../icons/HomeIcon'
import ProfileIcon from '../../icons/ProfileIcon'
import { Link } from 'react-router-dom'

function LeftMenu({ loggedInContact }) {
    return (
        <div className="LeftMenu-main">
            <div>
                <Link to={"/"}>
                    <HomeIcon></HomeIcon>
                    <p>Home</p>
                </Link>
            </div>
            <div>
                <Link to={"/profile/" + loggedInContact.id}>
                    <ProfileIcon></ProfileIcon>
                    <p>Profile</p>
                </Link>
            </div>
        </div>
    )
}

export default LeftMenu;
