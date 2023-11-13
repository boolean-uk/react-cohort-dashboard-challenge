import Header from "../Header"
import Navigation from "../Navigation"
import Main from "../Main"

import '../../styles/initials.css'

function HomePage({ posts, URL, loggedInUser, loggedInUserInitials, setShouldGetPosts, currentSelect, setCurrentSelect }) {

    function userBgColour(user) {
        if (user.id === 1) return 'logged-in-user'
        if (user.id === 2) return 'user-z'
        if (user.id === 3) return 'user-y'
        if (user.id === 4) return 'user-x'
        if (user.id === 5) return 'user-w'
        if (user.id === 6) return 'user-v'
        if (user.id === 7) return 'user-u'
        if (user.id === 8) return 'user-t'
        if (user.id === 9) return 'user-s'
        if (user.id === 10) return 'user-r'
        if (user.id === 11) return 'user-q'
        if (user.id === 12) return 'user-p'
        if (user.id === 13) return 'user-o'
        if (user.id === 14) return 'user-n'
        if (user.id === 15) return 'user-m'
        else return
    }

    return(
        <div className="container grid">
            <Header loggedInUserInitials={loggedInUserInitials} />
            <Navigation currentSelect={currentSelect} setCurrentSelect={setCurrentSelect} />
            <Main posts={posts} URL={URL} loggedInUser={loggedInUser} loggedInUserInitials={loggedInUserInitials} userBgColour={userBgColour} setShouldGetPosts={setShouldGetPosts} />
        </div>
    )
}

export default HomePage