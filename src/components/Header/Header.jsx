import Title from './Title';
import './header.css';

function Header () {
    return (
        <header className = "header">
            <div className = "header-elements">
                <div className = "header-logo">
                    <Title />
                </div>
                <div className = "header-profile-icon">
                    <h3>HI</h3>
                </div>
            </div>
        </header>
    )
}

export default Header;