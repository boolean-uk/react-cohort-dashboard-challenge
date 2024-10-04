import { useContext, useEffect, useState } from "react";
import { GetPostById } from "../../PostAPIs/PostAPI";
import { PostContext } from "../../App";
import { useParams } from "react-router-dom";
import "../Feed/Post.css";
import Post from "./Post";
import "../Feed/PostDetail.css";

export default function PostDetail() {
    const {username} = useContext(PostContext);
    const [aPost, setApost] = useState(null);
    const { id } = useParams();
    


const fetchSinglePostById = async () => {
    try {
      const result = await GetPostById(username, id);
      setApost(result);
    } catch (error) {
      console.error("Error while adding a new comment: " + error);
    }
  }

  useEffect(() => {
    fetchSinglePostById();
  }, []);

 

  if (!aPost) {
    return <p>Loading post.....</p>
  }

  return(
    <div className="single-post">
        <Post post={aPost}/>
    </div>
);
}