function SideBar() {
  return (
    <nav className="sideBar">
      <div className="homeIconCon">
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
