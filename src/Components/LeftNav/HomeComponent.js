import { Link } from "react-router-dom";
import HomeIcon from "../Logos/HomeIcon";

function HomeComponent() {
    return (
        <Link to={"/"} style={{ textDecoration: "none" }}>
            <div class="nav-item">
                <HomeIcon />
                <div class="nav-label">Home</div>
            </div>
        </Link>
    );
}

export default HomeComponent;
