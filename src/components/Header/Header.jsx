import titleHeader from "../../assets/title-header.svg";

import "../../Styles/header.css";

function Header() {
  return (
    <header className="header">
      <img src={titleHeader} alt="title-Header" width={400} />
      <div className="profile-circle">
        <p></p>
      </div>
    </header>
  );
}

export default Header;
