import SinglePost from "./SinglePost"

function Posts({ posts, URL, loggedInUser, loggedInUserInitials, setShouldGetPosts }) {


    return (
        <ul className="all-posts grid">
            {posts.map((post) => 
                <SinglePost key={post.id} post={post} URL={URL} loggedInUser={loggedInUser} loggedInUserInitials={loggedInUserInitials} setShouldGetPosts={setShouldGetPosts} />
            )}
        </ul>
        
    )
}

export default Posts