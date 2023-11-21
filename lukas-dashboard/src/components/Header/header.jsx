import ProfileLogo from "../Reusable/profileLogo";
import SiteLogo from "../Reusable/siteLogo";

export default function Header() {

    const userId = "1"

    return (
        <div className="header">
                <SiteLogo />
                <ProfileLogo id={userId}/>
        </div>
    )
}
