
import { Link } from "react-router-dom";


const Header = () =>{
  return(
    <>
    TODO: Format this like the dahsboard on github
    <header>
      <div className="logo">
        <Link to="/">
        <img src="src/assets/title-header.svg" alt="Home"/>
        
        </Link>
      </div>
      <div className="profile">
        <Link to="/profile">
        <img src="src/assets/profile.svg" alt="Profile"/>
        </Link>
      </div>
    </header>
    </>
  )
}

export default Header;