// Navigation component
import { Link, useLocation } from "react-router-dom";

export default function SidebarNavigation() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="logo">
        <img src="src/assets/logo.png" alt="Logo" />
      </div>

      <div className="navigation glow">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/profile"
          className={location.pathname === "/profile" ? "active" : ""}
        >
          Profile
        </Link>
      </div>
    </div>
  );
}
