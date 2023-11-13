import CreatePost from "./components/NewPost/CreatePost"
import Posts from "./components/Post/Posts"

import '../../styles/main.css'

function Main({ posts, URL, loggedInUser, loggedInUserInitials, setShouldGetPosts }) {

    return (
        <main className="main grid">
            <CreatePost posts={posts} URL={URL} loggedInUser={loggedInUser} loggedInUserInitials={loggedInUserInitials} setShouldGetPosts={setShouldGetPosts} />
            <Posts posts={posts} URL={URL} loggedInUser={loggedInUser} loggedInUserInitials={loggedInUserInitials} />
        </main>
    )
}

export default Main