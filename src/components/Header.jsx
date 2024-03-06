import cohortManager from "../assets/images/headerlogo.svg";
import user from "../assets/data/user";

export default function Header() {
  return (
    <div>
      <header className="header blue">
        <link rel="stylesheet" href="App.css" />
        <div className="cohort-manager">
          <img src={cohortManager} />
        </div>
        <div className="profile-icon">
          <div id="profile-icon-id">
            {user.firstName.charAt(0) + "" + user.lastName.charAt(0)}
          </div>
        </div>
      </header>
    </div>
  );
}
