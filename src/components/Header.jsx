// Header.jsx
import '../styles/Header.css'; // Corrected import path
import titleHeader from '../assets/title-header.svg';
import { ProfileImage } from './ProfileImage';
import { useContext } from 'react';
import { AuthContext } from './App';
import { Link } from 'react-router-dom';

export const Header = () => {
  const authUser  = useContext(AuthContext)

  return (
    <nav className="header">
      <div className="header-group">
        <Link to="/">
          <img
            className="header-logo"
            src={titleHeader}
            alt="cohort-manager-logo"
          />
        </Link>
        <div className="header-profile">
          <ProfileImage user={authUser} />
        </div>
      </div>
    </nav>
  );
};
