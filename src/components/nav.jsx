import { Link } from "react-router-dom";

const Nav = () => {
  return (
<>
    <nav>
      <Link to="/">
        <img className="nav-home" src="src/assets/home.svg" alt="home" />
      </Link>
      <Link to="/profile">
        <img className="nav-profile" src="src/assets/profile.svg" alt="profile" />
      </Link>
    </nav>
    </>
  );
};

export default Nav;
