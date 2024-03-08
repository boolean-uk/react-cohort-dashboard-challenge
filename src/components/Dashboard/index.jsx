import { useContext } from "react"
import { AppContext } from "../../App"
import PostListItem from "./PostListItem"
import CreateNewPost from "./CreateNewPost"
import './style.css'

function PostList(){
    const{posts, setPosts} = useContext(AppContext)
    
    if(posts.length === 0) return <p>Error, try reloading</p>
    
    return(
        <div className="post-list-container">
            <div className="new-post">
                <CreateNewPost setPosts={setPosts}/>
            </div>
            
            <div className="post-items-container">
                {posts.map((post, index) =>(
                    <PostListItem key={index} post={post} />
                ))}
            </div>
        </ div>
    )
}

export default PostList