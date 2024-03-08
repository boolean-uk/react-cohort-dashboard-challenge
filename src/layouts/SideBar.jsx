
import { useContext } from 'react'
import HomeIcon from '../assets/icons/HomeIcon'
import ProfileIcon from '../assets/icons/ProfileIcon'
import { UserContext } from '../app/App'


function SideBar() {
  const { user } = useContext(UserContext);
  return (
    <aside>
      <div className="sidebar-item">
      <a href="/"> 
            <HomeIcon />
            <i className="icon home"> HOME</i>
          </a>
      </div>
      
      <div className="sidebar-item">
          <a href={`/profile/:${user.id}`}> 
            <ProfileIcon />
            <i className="icon profile"> PROFILE</i>
          </a>
      </div>
      
    </aside>
  )
}

export default SideBar



