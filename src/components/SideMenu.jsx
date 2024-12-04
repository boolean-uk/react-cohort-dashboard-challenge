import SideMenuButton from "../SideMenuButton"
import HomeIconSVG from "../assets/HomeIconSVG"
import ProfileIconSVG from "../assets/ProfileIconSVG"

export default function SideMenu() {
    return (
        <div className='side_menu'>
            <SideMenuButton imageContent={<HomeIconSVG />} />
            <SideMenuButton imageContent={<ProfileIconSVG />} navPath={"profile"} />
        </div>
    )
}
