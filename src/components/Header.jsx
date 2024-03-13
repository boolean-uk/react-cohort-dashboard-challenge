import cohortManager from "../assets/images/headerlogo.svg";
import { useContext } from "react";
import { AppContext } from "../App";
import Icon from "./Icon";

export default function Header() {
  const context = useContext(AppContext);

  return (
    <div className="header-container">
      <header className="header blue">
        <link rel="stylesheet" href="App.css" />

        <div className="profile-icon">
          <Icon user={context.user} />
        </div>
        <div className="cohort-manager">
          <img className="cohort-image" src={cohortManager} />
        </div>
      </header>
    </div>
  );
}
