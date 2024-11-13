import { Link } from "react-router-dom";
import "./sidebar.css";

function MenuItem({ icon, title }) {
  return (
    <div className="menu-item">
      <Link to="/">
            <img src={icon} alt={title} /><br></br>
            <span>{title}</span>
      </Link>
    </div>
  );
}

export default MenuItem;