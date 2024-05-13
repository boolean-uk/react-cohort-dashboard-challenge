import CreatePost from "./CreatePost";
import Post from "./Post";

export default function Feed(props) {
    const { randomAuthor, posts, authors } = props

    return (
        <main>
            <CreatePost randomAuthor={randomAuthor} />

            <Post 
                posts={posts}
                authors={authors}
                randomAuthor={randomAuthor}
            />
        </main>
    )
}