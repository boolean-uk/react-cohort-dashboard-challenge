import { useContext, useState, useEffect } from "react";
import Post from "./Post";
import { AppContext } from "../App";
import { useParams } from "react-router-dom";

function PostDetails() {
  const { posts } = useContext(AppContext);
  const [currentPost, setCurrentPost] = useState("");
  const { id } = useParams();
  useEffect(() => {
    if (posts && id) {
      setCurrentPost(posts.find((item) => Number(item.id) === Number(id)));
    }
  }, []);

  console.log(currentPost);
  if (!currentPost) return <p>loading..</p>;

  return (
    <div>
      <Post post={currentPost} />
    </div>
  );
}

export default PostDetails;
