
import { useContext } from 'react'
import HomeIcon from '../assets/icons/HomeIcon'
import ProfileIcon from '../assets/icons/ProfileIcon'
import { UserContext } from '../app/App'


function SideBar() {
  const { user } = useContext(UserContext);
  return (
    <aside className='sidebar'>
      <div className="sidebar-item">
        <a href="/" className='sidebar-link'> 
            <HomeIcon />
            <span className="icon-text">Home</span>
        </a>
      </div>
      
      <div className="sidebar-item">
          <a href={`/profile/:${user.id}`} className='sidebar-link'> 
            <ProfileIcon />
            <span className="icon-text">Profile</span>
          </a>
      </div>
      
    </aside>
  )
}

export default SideBar



