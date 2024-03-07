import { useParams } from "react-router-dom";
import * as API from "../../API/API";
import { createContext, useEffect, useState } from "react";
import PostItem from "../PostItem/PostItem";

export const PostPageContext = createContext();

function PostPage({ props }) {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  const getPost = () => {
    API.getPostById(postId)
      .then((res) => res.json())
      .then((data) => setPost(data));
  };
  useEffect(() => getPost(), []);
  return (
    <div className="feed-background">{post && <PostItem post={post} />}</div>
  );
}

export default PostPage;
