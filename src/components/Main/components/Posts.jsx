import SinglePost from "./SinglePost"

function Posts({ posts, URL }) {


    return (
        <ul className="all-posts grid">
            {posts.map((post) => 
                <SinglePost key={post.id} post={post} URL={URL} />
            )}
        </ul>
        
    )
}

export default Posts