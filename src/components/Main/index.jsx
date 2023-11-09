import CreatePost from "./components/CreatePost"
import Posts from "./components/Posts"

import '../../styles/main.css'

function Main({ posts }) {

    return (
        <main className="main">
            <CreatePost></CreatePost>
            <Posts posts={posts}></Posts>
        </main>
    )
}

export default Main