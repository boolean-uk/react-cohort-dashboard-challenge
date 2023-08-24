import { useState } from "react";
import MenuButton from "./MenuButton";
import HomeIcon from "./svg/HomeIcon";
import ProfileIcon from "./svg/ProfileIcon";

export default function Menu() {
    const [tabs, setTabs] = useState([
        {
            id: 0,
            icon: <HomeIcon/>,
            label: 'Home',
            active: true
        },
        {
            id: 1,
            icon: <ProfileIcon/>,
            label: 'Profile',
            active: false
        }
    ])

    return (
        <ul className="menu">
            {tabs.map(tab => {
                return <MenuButton key={tab.id} icon={tab.icon} label={tab.label} active={tab.active}/>
            })}
        </ul>
    )
}