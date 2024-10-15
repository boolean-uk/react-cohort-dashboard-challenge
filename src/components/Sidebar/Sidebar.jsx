import './Sidebar.css';
import '../../App.css'
import ProfileIcon from '../../assets/profile.svg'
import HomeIcon from '../../assets/home.svg'
import { NavLink } from 'react-router-dom';


function Sidebar() {
    return (
        <>
            <nav>
                <ul>
                    <li className='sidebar-list'>
                        <NavLink to="/">
                            <img src={HomeIcon} className='sidebar-icon' />
                            Home
                        </NavLink>
                    </li>
                    <li className='sidebar-list'>
                        <NavLink to="/primeUser/1">
                            <img src={ProfileIcon} className='sidebar-icon' />
                            Profile
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Sidebar