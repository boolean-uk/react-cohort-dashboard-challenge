import CreatePost from "./components/CreatePost"
import Posts from "./components/Posts"

import '../../styles/main.css'

function Main({ posts, URL }) {

    return (
        <main className="main">
            <CreatePost></CreatePost>
            <Posts posts={posts} URL={URL}></Posts>
        </main>
    )
}

export default Main