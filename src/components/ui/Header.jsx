import { useContext } from "react";

import Avatar from "../Avatar";
import LogoIcon from "../icons/LogoIcon";

import { getInitialsFromUser } from "../../util/misc";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../Contexts";

function Header() {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <header className="header">
      <div>
        <Link to="/">
          <LogoIcon />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Avatar
              bgColor={currentUser.favouriteColour}
              initials={getInitialsFromUser(currentUser)}
              textColor={"var(--primary)"}
              to="/profile"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
