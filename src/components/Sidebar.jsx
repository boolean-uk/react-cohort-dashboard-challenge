import { Link, useLocation } from "react-router-dom"
import Profile from '../assets/profile-icon.svg'
import Home from '../assets/home-icon.svg'
import { useContext } from "react"
import { AppContext } from "../App"

function Sidebar() {
    const { user } = useContext(AppContext)
    const location = useLocation()
    const isHome = location.pathname === '/'
    const isProfile = location.pathname === `/profile/${user.id}`
    return (
        <>
        <Link className="SideBarLink" to='/'>
          <div className={`SideBarLink${isHome ? 'Active' : 'Inactive'}`}>
            <div>
              <img className="Sidebar-Icon" src={Home} />
              < br />
              Home
            </div>
          </div>
        </Link>
        <Link className="SideBarLink" 
        to={`/profile/${user.id}`}>
          <div className={`SideBarLink${isProfile ? 'Active' : 'Inactive'}`}>
            <div>
              <img className="Sidebar-Icon" src={Profile} />
              < br />
              Profile
            </div>
          </div>
        </Link>
        </>
    )
}

export default Sidebar