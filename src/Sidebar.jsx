import React from 'react';
import { useContext } from 'react';
import { MyContext } from "./App"
import { Link } from 'react-router-dom'; 
import HomeIcon from '../src/assets/icons/home-icon.svg'
import ProfileIcon from '../src/assets/icons/profile-icon.svg'
import PostIcon from '../src/assets/icons/post-icon.svg'

function Sidebar() {
  const { user } = useContext(MyContext);

  if (user) return (
    <div className="sidebar">
      <ul>
          <div className='home-icon'>
            <Link to="/">
              <img src={HomeIcon}/>
            </Link>
            <Link to="/">Home</Link>
          </div>
  
          <div className='create-post-icon'>
            <Link to="/create-post">
            <img src={PostIcon}/>
          </Link>
          <Link to='/create-post'>Create Post</Link>
          </div>
          <div className='profile-icon'>
            <Link to="/profile/">
             <img src={ProfileIcon}/>
            </Link> 
            <Link to={`/profile/${user.id}`}>Profile</Link>
          </div>
      </ul>
    </div>
  );
}  

export default Sidebar;
