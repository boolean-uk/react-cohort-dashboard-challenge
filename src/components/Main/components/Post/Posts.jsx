import SinglePost from "./SinglePost"

function Posts({ posts, URL, loggedInUser, loggedInUserInitials, userBgColour }) {


    return (
        <ul className="all-posts grid">
            {posts.map((post) => 
                <SinglePost key={post.id} post={post} URL={URL} loggedInUser={loggedInUser} loggedInUserInitials={loggedInUserInitials} userBgColour={userBgColour} />
            )}
        </ul>
        
    )
}

export default Posts