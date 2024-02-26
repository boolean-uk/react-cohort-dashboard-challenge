export default function NavbarButton({ children, icon, href }) {
  return (
    <div className="navbar-button">
      <a href={href} className="navbar-button">
        <img src={icon} alt="Home" />
        <p>{children}</p>
      </a>
    </div>
  );
}
