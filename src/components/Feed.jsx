import CreatePost from "./CreatePost";
import Post from "./Post";

export default function Feed() {
    return (
        <main className="post">
            <CreatePost />

            <Post />
        </main>
    )
}