import Header from "../Header"
import Navigation from "../Navigation"

import '../../styles/profile.css'

function Profile({ loggedInUserInitials, currentSelect, setCurrentSelect }) {

    return (
        <section className="container grid">
            <Header loggedInUserInitials={loggedInUserInitials} />
            <Navigation currentSelect={currentSelect} setCurrentSelect={setCurrentSelect} />
            <div className="profile">
                <h2>Profile page placeholder</h2>
            </div>
        </section>
    )
}

export default Profile