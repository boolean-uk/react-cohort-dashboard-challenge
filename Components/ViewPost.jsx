import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ViewPost() {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/samisalehsaeed/post/${params.id}`
    )
      .then((res) => res.json())
      .then(setPost)
      .catch((error) => {
        console.error("Error fetching post: ", error);
      });

    fetch(
      `https://boolean-uk-api-server.fly.dev/samisalehsaeed/post/${params.id}/comment`
    )
      .then((res) => res.json())
      .then(setComments)
      .catch((error) => {
        console.error("Error fetching comments: ", error);
      });
  }, [params.id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ul>
        <li className="users">
          <h3>{post.title}</h3>
          <br />
          <p>{post.content}</p>
        </li>
      </ul>
      <ul className="comments">
        {comments.map((comment, index) => (
          <li key={index} className="users">
            <p>{comment.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
