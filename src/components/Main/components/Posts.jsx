import SinglePost from "./SinglePost"

function Posts({ posts, URL, loggedInUserInitials, loggedInUserColour }) {


    return (
        <ul className="all-posts grid">
            {posts.map((post) => 
                <SinglePost key={post.id} post={post} URL={URL} loggedInUserInitials={loggedInUserInitials} loggedInUserColour={loggedInUserColour} />
            )}
        </ul>
        
    )
}

export default Posts