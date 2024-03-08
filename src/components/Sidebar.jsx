import { useNavigate } from 'react-router-dom'
import homeIcon from '../assets/home-icon.svg'
import profileIcon from '../assets/profile-icon.svg'
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export default function Sidebar() {
  const navigate = useNavigate();
  const user = useContext(UserContext)

  return (
    <nav className="sidebar">
        <div className='sidebar-item' onClick={()=> navigate("/")}>
          <img className='sidebarIcon' src={homeIcon} alt="home icon" />
          <p style={{color: '#64648C'}}>Home</p>
        </div>

        <div className='sidebar-item' onClick={() => navigate(`/profile/${user.id}`)}>
          <img className='sidebarIcon' src={profileIcon} alt="profile icon" />
          <p style={{color: '#64648C'}}>Profile</p>
        </div>
    </nav>
  )
}
