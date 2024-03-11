import React from 'react'
import './Sidebar.css'
import ProfileIconSVG from './assets/profile-icon-svg'
import HomeIconSVG from './assets/home-icon-svg'

export default function SidebarComponent() {
    return (
        <div className='sidebar'>
            <ul className='list'>
                <li>
                    <HomeIconSVG />
                    Home
                </li>
                <li>
                    <ProfileIconSVG />
                    Profile
                </li>
            </ul>
        </div>
    )
}
