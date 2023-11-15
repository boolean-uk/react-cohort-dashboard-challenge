
import { Link } from "react-router-dom";


const Header = () =>{
  return(
    <>
  
    <header>
      <div className="logo">
        <Link to="/">
        <img src="src/assets/title-header.svg" alt="Home"/>
        
        </Link>
        <h1 className="title">Cohort Manager</h1>
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