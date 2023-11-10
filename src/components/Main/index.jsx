import CreatePost from "./components/CreatePost"
import Posts from "./components/Posts"

import '../../styles/main.css'

function Main({ posts, URL, loggedInUser, loggedInUserInitials, userBgColour, setShouldGetPosts }) {

    return (
        <main className="main grid">
            <CreatePost posts={posts} URL={URL} loggedInUser={loggedInUser} loggedInUserInitials={loggedInUserInitials} setShouldGetPosts={setShouldGetPosts} />
            <Posts posts={posts} URL={URL} loggedInUserInitials={loggedInUserInitials} userBgColour={userBgColour} />
        </main>
    )
}

export default Main