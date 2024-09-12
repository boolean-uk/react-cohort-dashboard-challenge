import profile from '../assets/profile-icon.svg'
import home from '../assets/home-icon.svg'
import '../style/dash.css'
import { Link } from 'react-router-dom'
export function Nav(){
    return(
        <div className="container-nav-main">
            <nav className="sidebar">
            <ul>
                <li>
                    <Link to='/'>
                        <img src={home}/>
                    </Link>
                </li>
                <li>
                    <Link to='/profile'>
                        <img src={profile}/>
                    </Link>
                </li>

            </ul>
            </nav> 
        </div>
    )
}