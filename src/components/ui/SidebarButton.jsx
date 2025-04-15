import { Link } from "react-router-dom";

function SidebarButton({ name, to, active, setActive, children }) {
  return (
    <li
      className={"sidebar-button container" + (active == name ? " active" : "")}
    >
      <Link className="container" to={to} onClick={() => setActive(name)}>
        {children}
      </Link>
    </li>
  );
}

export default SidebarButton;
