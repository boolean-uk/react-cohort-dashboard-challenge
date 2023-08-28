import { useState } from "react";
import { ReactComponent as HomeIcon } from './svg/home-icon.svg'
import { ReactComponent as ProfileIcon } from './svg/profile-icon.svg'

import MenuButton from "./MenuButton";

export default function Menu() {
    const [tabs, setTabs] = useState([
        {
            id: 0,
            icon: <HomeIcon/>,
            label: 'Home',
            active: true,
            path: '/' 
        },
        {
            id: 1,
            icon: <ProfileIcon/>,
            label: 'Profile',
            active: false,
            //placeholder -> to change later
            path: '/'
        }
    ])

    return (
        <ul className="menu">
            {tabs.map(tab => {
                return <MenuButton key={tab.id} icon={tab.icon} label={tab.label} active={tab.active} path={tab.path}/>
            })}
        </ul>
    )
}