import { useContext } from 'react';
import HomeIcon  from '../assets/home-icon.svg'; 
import ProfileIcon from '../assets/profile-icon.svg'; 
import '../styling/sidebar.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const Sidebar = () => {

  /*
  TODO: Fix this instead of hardcoding
  const { userDetails } = useContext(UserContext)
  console.log(userDetails)
  */
  return (
    <nav className="sidebar">
        <Link to="/">
          <button className="nav-button">
            <img src={HomeIcon} className="home-icon"/>
            <span>Home</span>
          </button>
        </Link>
        <Link to={`/profile/1`}>
          <button className="nav-button">
            <img src={ProfileIcon} alt="Profile" className="profile-icon" />
            <span>Profile</span>
          </button>
      </Link>
    </nav>
  );
};

export default Sidebar