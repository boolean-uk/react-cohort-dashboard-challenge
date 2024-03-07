import { useState, useEffect, useContext } from "react";
import { MyContext } from "../App";
import CreateComment from "./CreateComment";

export default function Post({ post }) {
  const context = useContext(MyContext);
  const [comments, setComments] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);
  const [commentUsers, setCommentUsers] = useState([]);


  useEffect(() => {
    const fetchData = () => {
      fetch(`https://boolean-api-server.fly.dev/hassanhussa1n/post/${post.id}/comment`)
        .then((response) => response.json())
        .then((data) => {
          setComments(data);
        });
    };

    fetchData();
  }, [post.id]);

  const displayedComments = showAllComments ? comments : comments.slice(0, 3);

  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>Add A Comment: </p>
      <CreateComment postId={post.id} comments={comments} setComments={setComments}/>
      <h4>Comments</h4>
      {displayedComments.map((comment, index) => (
        <div className="comment" key={comment.id}>
          <p>{comment.content}</p>
          {commentUsers[index] && (
  <div className="profile-icon">{commentUsers[index].initials}</div>
)}
        </div>
      ))}
      {!showAllComments && comments.length > 3 && (
        <button className="show-all-button" onClick={() => setShowAllComments(true)}>
          See All
        </button>
      )}
    </>
  );
}
