import { useParams } from "react-router-dom";
import * as API from "../../API/API";
import { useState } from "react";
import PostItem from "../PostItem/PostItem";

function PostPage({ props }) {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  API.getPostById(postId)
    .then((res) => res.json())
    .then((data) => setPost(data));
  return (
    <div className="feed-background">{post && <PostItem post={post} />}</div>
  );
}

export default PostPage;
