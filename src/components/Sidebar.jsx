import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">
        <span className="material-symbols-outlined">Home</span>
        <h3>Home</h3>
      </Link>
      <Link to="/profile/1">
        <span className="material-symbols-outlined">account_circle</span>
        <h3>Profile</h3>
      </Link>

      <Link to="#">
        <span className="material-symbols-outlined">logout</span>
        <h3>Logout</h3>
      </Link>
    </div>
  );
}

export default Sidebar;
