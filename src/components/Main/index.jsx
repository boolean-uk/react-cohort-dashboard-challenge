import CreatePost from "./components/CreatePost"
import Posts from "./components/Posts"

import '../../styles/main.css'

function Main({ posts, URL, loggedInUserInitials, loggedInUserColour }) {

    return (
        <main className="main grid">
            <CreatePost />
            <Posts posts={posts} URL={URL} loggedInUserInitials={loggedInUserInitials} loggedInUserColour={loggedInUserColour} />
        </main>
    )
}

export default Main