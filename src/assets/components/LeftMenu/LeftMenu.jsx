import HomeLogo from "./HomeLogo";
import ProfileLogo from "./ProfileLogo";
import "../LeftMenu/LeftMenu.css"
import { Link, useNavigate, useParams } from "react-router-dom";


export default function LeftMenu() {


    return (
        <>
            <nav className="left-menu">

                
                <Link to="/" className="home-logo">
                    <HomeLogo />
                </Link>

                <Link to="/profile" className="profile-logo">
                    <ProfileLogo />
                </Link>

            </nav>
        </>
    )
}