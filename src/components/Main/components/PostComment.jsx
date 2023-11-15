import { useEffect, useState } from "react";
import "../../../Styles/comment.css";
function PostComment({ root, comment }) {
  const [commentAuthor, setCommentAuthur] = useState(null);

  const fetchCommentAuthor = () => {
    fetch(`${root}/contact/${comment.contactId}`)
      .then((res) => res.json())
      .then((data) => setCommentAuthur(data));
  };
  console.log("print", commentAuthor);

  useEffect(fetchCommentAuthor, []);
  if (!commentAuthor) return <p>loading..</p>;

  const commentor = commentAuthor.firstName[0] + commentAuthor.lastName[0];

  return (
    <section className="single-comment">
      <div className="profile-circle comment-circle">{commentor}</div>
      <div className="single-comment--details">
        <h5>
          {commentAuthor.firstName} {commentAuthor.lastName}
        </h5>
        <p className="comment-text">{comment.content}</p>
      </div>
      <div></div>
    </section>
  );
}

export default PostComment;
