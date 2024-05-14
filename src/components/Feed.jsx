import CreatePost from "./CreatePost";
import Post from "./Post";

export default function Feed(props) {
    const { randomAuthor, posts, authors, loadedPosts } = props

    const sortedPosts = [...posts].sort((a, b) => b.id - a.id)

    return (
        <main>
            <CreatePost 
                randomAuthor={randomAuthor} 
                loadedPosts={loadedPosts}
            />

            <Post 
                posts={sortedPosts}
                authors={authors}
                randomAuthor={randomAuthor}
            />
        </main>
    )
}