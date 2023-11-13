import { Link } from "react-router-dom";

const Nav = () => {
  return (
<>
    TODO: Format this like the dahsboard on github
    <nav>
      <Link to="/">
        <img src="src/assets/home.svg" alt="home" />
      </Link>
      <Link to="/profile">
        <img src="src/assets/profile.svg" alt="profile" />
      </Link>
    </nav>
    </>
  );
};

export default Nav;
