import { useContext } from "react"
import "../styling/PostList.css"
import PostItem from "./PostItem"
import { UserPostsContext } from "./PostFeed"
/* eslint react/prop-types: 0 */
function PostList(){
    const  { userPosts } = useContext(UserPostsContext)

    return(
        <>
        {userPosts.toReversed().map((post, i) => (
            <PostItem post={post} key={i}/>
        ))}       
        </>
    )
}

export default PostList