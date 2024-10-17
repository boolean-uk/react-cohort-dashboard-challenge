import { useState } from 'react'
import '../styles/sidebar.css'
import HomeIcon from './HomeIcon'
import Profile from './ProfileIcon'


export default function Sidebar() {
    const [activeId, setactiveId] = useState(null);

    const sidebarItems = [
        { id: 1, component: <HomeIcon />, text: "Home" },
        { id: 2, component: <Profile />, text: "Profile" },
    ]
    return (
        
        <div className='sidebar-container'>
            { sidebarItems.map((item) => (
                <div 
                    className={`sidebar-item ${activeId === item.id ? 'active' : ''}`} 
                    key={item.id} 
                    onClick={() => setactiveId(item.id)}
                >
                    { item.component}
                    <p className='home-text'>{item.text}</p>    
                </div>
            ))}    
        </div>
    )
}













/*


import Logo from "./Logo";
import '../styles/header.css'
import Avatar from "./Avatar";

export default function Header() {
    return (
        <div className="header-container">
            <Logo />
            <Avatar />
        </div>
    )
}


*/