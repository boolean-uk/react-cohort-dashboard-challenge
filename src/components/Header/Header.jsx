import Title from './Title';
import './header.css';
import ProfileIcon from './ProfileIcon';

function Header () {

    return (
        <header className = "header">
            <div className = "header-elements">
                <div className = "header-logo">
                    <Title />
                </div>
                <div className = "header-profile-icon">
                    {/* <h3>TE</h3> */}
                    <ProfileIcon />
                </div>
            </div>
        </header>
    )
}

export default Header;