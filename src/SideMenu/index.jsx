import { Link } from 'react-router-dom'
import './style.css'

function SideMenu() {
    return(
        <ul className='side-menu'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
        </ul>
    )
}

export default SideMenu