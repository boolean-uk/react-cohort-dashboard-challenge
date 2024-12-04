import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetPostById } from "../../APIs/PostAPI";
import "../Feed/SpecificPost.jsx"
import Post from "./Post";


export default function SpecificPost() {
    const [post, setPost] = useState(null)
    const { id } = useParams();


    const fetchPost = async () => {
        try {
            const result = await GetPostById("thomaafl", id)
            console.log(result)
            console.log("hei")
            setPost(result);
        } catch (error) {
            console.error("Error while fetching post: " + error)
        }
    
    }

    useEffect(() => {
        fetchPost()
    }, []);

    


    if (!post) {
        return <p>Loading post.....</p>
    }

    return(
        <div className="single-post">
            <Post post = {post}/>
        </div>
    );

}