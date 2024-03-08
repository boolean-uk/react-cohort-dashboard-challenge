import { NavLink, useLocation } from 'react-router-dom';
import HomeIcon from '../assets/HomeIcon';
import ProfileIcon from '../assets/ProfileIcon';

export default function Sidebar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="sidebar">
            <ul>
                <li>
                    <NavLink to="/" style={{ textDecoration: 'none' }} className={(navData) => (navData.isActive ? "active" : 'none')}>
                        <div className='icon-container'>
                            <div className='icon-content'>
                                <HomeIcon fill={isActive('/') ? '#000046' : '#64648C'} />
                                <span>Home</span>
                            </div>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile" style={{ textDecoration: 'none' }} className={(navData) => (navData.isActive ? "active" : 'none')}>
                        <div className='icon-container'>
                            <div className='icon-content'>
                                <ProfileIcon fill={isActive('/profile') ? '#000046' : '#64648C'} />
                                <span >Profile</span>
                            </div>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}