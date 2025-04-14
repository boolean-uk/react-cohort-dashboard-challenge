import "./Sidebar.css";
import NavButton from "./NavButton";

export default function Sidebar() {
  return (
    <nav>
      <NavButton buttonType={"Home"} selected={true} />
      <NavButton buttonType={"Profile"} />
    </nav>
  );
}
