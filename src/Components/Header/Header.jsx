import SiteLogo from "../Reusable/siteLogo";
import ProfileLogo from "../Reusable/profileLogo";

export default function Header() {

    const userId = "1"
    return (
        <div className="header">
                <SiteLogo />
                <ProfileLogo id={userId}/>
        </div>
    )
}