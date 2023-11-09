import SinglePost from "./SinglePost"

function Posts({ posts }) {

    console.log(posts)

    return (
        <ul className="all-posts">
            {posts.map((post) => 
                <SinglePost key={post.id} post={post} />
            )}
        </ul>
        
    )
}

export default Posts