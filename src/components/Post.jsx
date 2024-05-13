import AddComment from "./AddComment";
import Author from "./Author";

export default function Post(props) {
    const { randomAuthor, posts, authors } = props

    return (
        <>
            {posts.map(post => 
                <article key={post.id}>
                    <Author
                        post={post} 
                        authors={authors}
                    />

                    <p>{post.content}</p>

                    <div id="separator"></div>

                    <AddComment randomAuthor={randomAuthor} />
                </article>
            )}
        </>
    )
}