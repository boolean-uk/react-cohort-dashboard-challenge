import { useNavigate } from "react-router-dom";

export default function NavbarButton({ children, icon, href }) {
  const navigate = useNavigate();

  return (
    <div className="navbar-button">
      <a onClick={() => navigate(href)} className="navbar-button">
        <img src={icon} alt="Home" />
        <p>{children}</p>
      </a>
    </div>
  );
}
