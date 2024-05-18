import { Link } from "react-router-dom";
import CreatePost from "./CreatePost";
import { useEffect, useState } from "react";
import AddComment from "./AddComment";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/samisalehsaeed/post`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        data.forEach((post) => {
          fetchComments(post.id);
        });
      });
  }, []);
  const fetchComments = (postId) => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/samisalehsaeed/post/${postId}/comment`
    )
      .then((res) => res.json())
      .then((data) => {
        setComments((prevComments) => [
          ...prevComments.filter((c) => c.postId !== postId),
          ...data,
        ]);
      });
  };
  return (
    <>
      <CreatePost />
      {/* <ul className="users">
        {posts.map((post) => (
          <li key={post.id}>
            <h2>
              ||||
              <br />
              <Link to={`/ViewPost/${post.id}`}>{post.title} </Link>
            </h2>
            <p>{post.content}</p>
            <ul className="comments">
              <br />
              {comments
                .filter((comment) => comment.postId === post.id)
                .map((comment) => (
                  <li key={comment.id} className="comments">
                    <p>{comment.content}</p>
                  </li>
                ))}
              <AddComment />
            </ul>
          </li>
        ))}
      </ul> */}
    </>
  );
}
