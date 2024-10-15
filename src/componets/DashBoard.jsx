import { useContext } from "react";
import CreatePost from "./CreatePost";
import { PostContext } from "../App";
import Post from "./Post";

function DashBoard(){
    const { posts } = useContext(PostContext)

    return(
        <>
            <CreatePost/>
            {posts.map( post => (
                <Post key={post.id} post={post} />
            ))}
        </>
    )
}

export default DashBoard