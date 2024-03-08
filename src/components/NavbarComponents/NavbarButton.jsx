import { useNavigate } from "react-router-dom";
export default function NavbarButton({ children, icon, href, isActive }) {
  const navigate = useNavigate();

  return (
    <section 
      className={`navbar-button ${isActive ? "active" : ""}`}
      onClick={() => navigate(href)}>
      <img src={icon} alt="Home" />
      <p>{children}</p>
    </section>
  );
}
