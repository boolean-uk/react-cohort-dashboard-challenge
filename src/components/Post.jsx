import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CommentFeed from "./CommentFeed";
import { UserContext } from "../App";




function Post() {
  const { findUserName } = useContext(UserContext);
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/badde00/post/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <h2>Loading post...</h2>;

  return (
    <div className="post">
      <h2>{findUserName(post.contactId)}</h2>
      <h3>{post.title}</h3>
      <p>{post.content}</p>

      <CommentFeed postId={id} />
    </div>
  )
}

export default Post;