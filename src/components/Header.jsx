import "/src/style/Header.css"
import {Link} from "react-router-dom";

export default function Header() {
    return(<div className="header">
        <img className="titleIcon" src="/src/assets/title-header.svg" />
        <Link to={`/profile/1`}>
          <img className="profileIcon" src="/src/assets/profile-icon.svg" />
        </Link>
        </div>)
}
