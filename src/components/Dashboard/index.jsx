import { useContext, useState, useEffect } from "react"
import { AppContext } from "../../App"
import PostListItem from "./PostListItem"
import CreateNewPost from "./CreateNewPost"

function PostList(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://boolean-api-server.fly.dev/ThomasKva/post")
        .then(response => response.json())
        .then((data) => setPosts(data))
        .catch(error => 
            console.error('Could not fetch data...', error))
        })


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