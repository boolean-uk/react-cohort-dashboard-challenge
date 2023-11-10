import CreatePost from "./components/CreatePost"
import Posts from "./components/Posts"

import '../../styles/main.css'

function Main({ posts, URL, loggedInUserColour }) {

    return (
        <main className="main grid">
            <CreatePost />
            <Posts posts={posts} URL={URL} loggedInUserColour={loggedInUserColour} />
        </main>
    )
}

export default Main