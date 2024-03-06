import homeIcon from "../assets/images/homeicon.svg";
import profIcon from "../assets/images/profileicon.svg";

function SideBar() {
  return (
    <nav className="sidebar red">
      <div className="home-icon">
        <img src={homeIcon} />
      </div>
      <div className="prof-icon">
        <img src={profIcon} />
      </div>
    </nav>
  );
}

export default SideBar;
