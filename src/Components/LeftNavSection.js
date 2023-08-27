import { Link } from "react-router-dom";
import ProfileIcon from "./Logos/ProfileIcon";
import HomeIcon from "./Logos/HomeIcon";

function LeftNavSection(props) {
    return (
        <nav class="left-section">
            <div class="nav-items">
                <div class="nav-item">
                    <ProfileIcon />
                    <div class="nav-label">
                        <Link to={"/"}>
                            <HomeIcon />
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default LeftNavSection;
