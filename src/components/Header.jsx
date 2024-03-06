import '../styles/Header.css'; // Corrected import path
import titleHeader from '../assets/title-header.svg';
import { ProfileImage } from './ProfileImage';

export const Header = () => {
    return (
      <nav className="header">
        <div className="header-group">
          <img
            className="header-logo"
            src={titleHeader}
            alt="cohort-manager-logo"
          />
          <ProfileImage />
        </div>
      </nav>
    );
};
