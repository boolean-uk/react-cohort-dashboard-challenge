import cohortManager from "../assets/images/headerlogo.svg";
import { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

export default function Header() {
  const context = useContext(AppContext);

  return (
    <div>
      <header className="header blue">
        <link rel="stylesheet" href="App.css" />
        <div className="cohort-manager">
          <img src={cohortManager} />
        </div>
        <div className="profile-icon">
          <Link to={`/profile/${context.user.id}`} className="profile-link">
            <div id="profile-icon-id">
              {context.user.firstName.charAt(0) +
                "" +
                context.user.lastName.charAt(0)}
            </div>
          </Link>
        </div>
      </header>
    </div>
  );
}
