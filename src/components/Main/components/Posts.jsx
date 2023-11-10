import SinglePost from "./SinglePost"

function Posts({ posts, URL, loggedInUserInitials, userBgColour }) {


    return (
        <ul className="all-posts grid">
            {posts.map((post) => 
                <SinglePost key={post.id} post={post} URL={URL} loggedInUserInitials={loggedInUserInitials} userBgColour={userBgColour} />
            )}
        </ul>
        
    )
}

export default Posts