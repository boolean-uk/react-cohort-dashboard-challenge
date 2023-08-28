import { Link } from "react-router-dom";
import ProfileIcon from "./Logos/ProfileIcon";
import HomeIcon from "./Logos/HomeIcon";
import { useContext } from "react";
import DataContext from "../DataContext";

function LeftNavSection() {
    const { loggedUser } = useContext(DataContext);

    return (
        <nav class="left-section">
            <div class="nav-items">
                <Link
                    to={`/view/profile/${loggedUser.id}`}
                    style={{ textDecoration: "none" }}
                >
                    <div class="nav-item">
                        <ProfileIcon />
                        <div class="nav-label">Profile</div>
                    </div>
                  
                </Link>

                <Link to={"/"} style={{ textDecoration: "none" }}>
                    <div class="nav-item">
                        <HomeIcon />
                        <div class="nav-label">Home</div>
                    </div>
                  
                </Link>
            </div>
        </nav>
    );
}

export default LeftNavSection;
