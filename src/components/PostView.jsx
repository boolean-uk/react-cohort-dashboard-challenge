import { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { useLocation, useParams } from "react-router-dom";

function PostView() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const { state } = useLocation()

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/maha897/post/${id}`)
      .then((response) => response.json())
      .then(setPost);

    fetch(`https://boolean-api-server.fly.dev/maha897/post/${id}/comment`)
      .then((response) => response.json())
      .then(setComments);
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="post-view">
        <Avatar name={`${state.firstName} ${state.lastName}`} round={true}/>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostView;
