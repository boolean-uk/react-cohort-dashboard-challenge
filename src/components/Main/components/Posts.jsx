import SinglePost from "./SinglePost"

function Posts({ posts, URL, loggedInUserColour }) {


    return (
        <ul className="all-posts grid">
            {posts.map((post) => 
                <SinglePost key={post.id} post={post} URL={URL} loggedInUserColour={loggedInUserColour} />
            )}
        </ul>
        
    )
}

export default Posts