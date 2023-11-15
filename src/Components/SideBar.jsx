import { useNavigate } from "react-router-dom";

function SideBar() {
  const goTo = useNavigate();
  return (
    <nav className="sideBar">
      <div className="homeIconCon" onClick={() => goTo("/")}>
        <div className="homeIcon">
          <img src="src/assets/home.svg" alt="home" />
        </div>
        <div className="homeText">
          <p>Home</p>
        </div>
      </div>
      <div className="profileIconCon">
        <div className="profileIcon">
          <img src="src/assets/profile.svg" alt="profile" />
        </div>
        <div className="profileText">
          <p>Profile</p>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
