import Header from "../Header"
import Navigation from "../Navigation"
import Main from "../Main"

import '../../styles/initials.css'

function HomePage({ posts, URL, loggedInUser }) {

    if (!loggedInUser) return <p>???</p>
    const loggedInUserInitials = loggedInUser.firstName.slice(0, 1) + loggedInUser.lastName.slice(0, 1)

    function loggedInUserColour(user) {
        if (user.id === 1) return 'logged-in-user'
        else return
    }

    return(
        <div className="container grid">
            <Header loggedInUserInitials={loggedInUserInitials} />
            <Navigation />
            <Main posts={posts} URL={URL} loggedInUserColour={loggedInUserColour} />
        </div>
        
    )
}

export default HomePage