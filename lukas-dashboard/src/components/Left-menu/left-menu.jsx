import HomeNavLogo from "./homeNavLogo"
import ProfileNavLogo from "../Reusable/profileNavLogo"
export default function LeftMenu() {

    return (
            <div className="left-menu">
                <HomeNavLogo/>
                <ProfileNavLogo/>
            </div>
    )
}
