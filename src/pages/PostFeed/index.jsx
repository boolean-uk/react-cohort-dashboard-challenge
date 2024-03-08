import AddPostForm from "./components/AddPostForm"
import PostList from "./components/PostList"
import "./styles.css"

export default function PostFeed() {


    return (
        <main className="post-feed main">
            <AddPostForm />
            <PostList />
        </main>
    )
}