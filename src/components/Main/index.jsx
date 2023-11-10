import CreatePost from "./components/CreatePost"
import Posts from "./components/Posts"

import '../../styles/main.css'

function Main({ posts, URL, loggedInUserInitials, userBgColour }) {

    return (
        <main className="main grid">
            <CreatePost />
            <Posts posts={posts} URL={URL} loggedInUserInitials={loggedInUserInitials} userBgColour={userBgColour} />
        </main>
    )
}

export default Main