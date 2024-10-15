import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { useParams } from "react-router-dom";
import "../styling/PostView.css"

function PostView(){
    const [post, setPost] = useState(null)
    const postId = useParams()

    useEffect(() => {
        const fetchdata = async () => {
            const response = await fetch("https://boolean-uk-api-server.fly.dev/PandersPanda/post/" + postId.id)
            const jsonData = await response.json();
            setPost(jsonData)
         };
         fetchdata();
        }, [postId])

    if (!post){
        return <></>
    }

    return(
        <div className="post_view">
            <PostItem post={post}/>
        </div>
    )
}

export default PostView