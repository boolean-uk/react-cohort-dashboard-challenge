import '../Header/Header.css'
import Logo from './Logo';
import { useContext } from 'react';
import { PostContext } from '../../App';
import { Link } from 'react-router-dom';

export default function Header() {
    const { loggedInUser } = useContext(PostContext);
    return(
        <header className="header">
            <div className="header-logo">
                <Logo />
            </div>
            <Link to={`/profile/${loggedInUser.id}`}>
            <div className="header-image" style={{backgroundColor: loggedInUser.favouriteColour}}>
              <p className="initials3">{loggedInUser.firstName.charAt(0)}{loggedInUser.lastName.charAt(0)}</p>
            </div>
            </Link>
        </header>
    );
}