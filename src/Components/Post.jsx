import Comments from "./Comments";
import { useState, useEffect, createContext } from "react";
export const PostContext = createContext()
function Post({ post }) {
  const [postComments, setPostComments] = useState();

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await fetch(
        ` https://boolean-api-server.fly.dev/Eliassoprani/post/${post.id}/comment`
      );
      const data = await response.json();
      setPostComments(data);
      console.log("data", data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div className="post">
      <li>
        <h4>{post.user}</h4>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <PostContext.Provider value={{
          postComments: postComments,
          setPostComments: setPostComments,

        }}>
        <Comments postComments={postComments} postId={post.id} />
        </PostContext.Provider>
      </li>
    </div>
  );
}

export default Post;
