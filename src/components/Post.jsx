import AddComment from "./AddComment";
import Author from "./Author";
import Comment from "./Comment";

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

                    <Comment 
                        post={post} 
                        authors={authors} 
                    />

                    <AddComment randomAuthor={randomAuthor} />
                </article>
            )}
        </>
    )
}