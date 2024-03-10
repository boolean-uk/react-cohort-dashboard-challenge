import { UserContext } from "../app/App";
import { useContext } from 'react';
import ProfileIcon from "../components/profile/ProfileIcon";

import HeaderIcon from '../assets/icons/HeaderIcon'

function Header() {
  const { user } = useContext(UserContext);
  return (
    <header className='header-item'>
      <HeaderIcon width={300} height={100} />
      <div className="profile-icon"> 
        <ProfileIcon user={user} />
      </div>

    </header>
  )
}

export default Header
