import titleHeader from "../../assets/title-header.svg";

import "../../Styles/header.css";

function Header({loggedInUserInitials}) {
  return (
    <header className="header">
      <img src={titleHeader} alt="title-Header" width={400} />
      <div className="profile-circle">
        <p>{loggedInUserInitials}</p>
      </div>
    </header>
  );
}

export default Header;
