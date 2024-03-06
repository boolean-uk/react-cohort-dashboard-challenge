import "./NavigationMenu.css";
import home_icon from "../../assets/home-icon.svg";
import profile_icon from "../../assets/profile-icon.svg";
import NavigationIcon from "./NavigationIcon/NavigationIcon";
import { useLocation } from "react-router-dom";
import { resetApiData } from "../../API/API";
function NavigationMenu() {
  const loc = useLocation();
  // console.log("loc", loc);
  const onHomePage = loc.pathname === "/posts";
  const onProfilePage = loc.pathname === "/profile";

  return (
    <div className="navigation-menu d-flex flex-column align-items-center">
      <div className=" flex-fill d-flex flex-column justify-content-between">
        <div>
          <NavigationIcon
            img={home_icon}
            title="Home"
            selected={onHomePage}
            navigateLink={"/posts"}
          />
          <NavigationIcon
            img={profile_icon}
            title="Profile"
            selected={onProfilePage}
            navigateLink={"/profile"}
          />
        </div>
        <button className="btn btn-danger mx-3" onClick={() => resetApiData()}>
          Reset API data
        </button>
      </div>
    </div>
  );
}

export default NavigationMenu;
