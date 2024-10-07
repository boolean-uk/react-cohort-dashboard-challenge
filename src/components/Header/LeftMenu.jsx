import home from "../../assets/home-icon.svg";
import profile from "../../assets/profile-icon.svg"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from "../../ApiProvider";
function LeftMenu() {
    const { contact } = useContext(MyContext);
  
    return (
        <div className="left-menu">
            <ul>
            <div className="menu-item">
                <Link to="/">
                <img src={home} alt="home" style={{ height: '35px' , marginRight: '50px'}} />
                </Link>
                <span style={{ marginRight: '50px' }}>Home</span>
                
            </div>
            
            <div className="menu-item">
            <Link to={`/profile/${contact.id}`}>
                <img src={profile} alt="profile" style={{ height: '35px' , marginRight: '50px' }} />
                </Link>
                <span style={{ marginRight: '50px' }}>Profile</span>
                
            </div>
            </ul>
        </div>
    );
}

export default LeftMenu;

