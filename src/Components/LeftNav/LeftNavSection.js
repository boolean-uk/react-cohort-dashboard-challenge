import HomeComponent from "./HomeComponent";
import ProfileComponent from "./ProfileComponent";

function LeftNavSection() {
    return (
        <nav class="left-section">
            <div class="nav-items">
                <ProfileComponent />
                <HomeComponent />
            </div>
        </nav>
    );
}

export default LeftNavSection;
