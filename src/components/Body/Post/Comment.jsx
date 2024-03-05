/* eslint-disable react/prop-types */
import "../Body.css";
export default function Comment({ comment }) {
  return (
    <>
      <div className="comment-box">{comment.content}</div>
    </>
  );
}
