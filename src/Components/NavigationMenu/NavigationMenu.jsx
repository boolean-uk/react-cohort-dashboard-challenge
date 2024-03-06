import "./NavigationMenu.css";
import home_icon from "../../assets/home-icon.svg";
import profile_icon from "../../assets/profile-icon.svg";
import NavigationIcon from "./NavigationIcon/NavigationIcon";
import { useLocation } from "react-router-dom";
function NavigationMenu() {
  const loc = useLocation();
  console.log("loc", loc);
  const onHomePage = loc.pathname === "/posts";

  return (
    <div className="navigation-menu d-flex flex-column align-items-center">
      <NavigationIcon
        img={home_icon}
        title="Home"
        selected={onHomePage}
        navigateLink={"/posts"}
      />
      <NavigationIcon img={profile_icon} title="Profile" />
    </div>
  );
}

export default NavigationMenu;
