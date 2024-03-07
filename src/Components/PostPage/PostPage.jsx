import { useNavigate, useParams } from "react-router-dom";
import * as API from "../../API/API";
import { createContext, useEffect, useState } from "react";
import PostItem from "../PostItem/PostItem";
import { FeedContext } from "../PostFeed/PostFeed";

export const PostPageContext = createContext();

function PostPage({ props }) {
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  const nav = useNavigate();

  const goTohome = () => nav("/posts");
  const getPost = () => {
    API.getPostById(postId)
      .then((res) => res.json())
      .then((data) => setPost(data));
  };
  useEffect(() => getPost(), []);
  return (
    <FeedContext.Provider value={{ posts: [post], updatePosts: goTohome }}>
      <div className="feed-background">{post && <PostItem post={post} />}</div>
    </FeedContext.Provider>
  );
}

export default PostPage;
