/* eslint-disable react/prop-types */
import "../Body.css";
export default function PostHeader({ post }) {
  return (
    <>
      <div className="post-title">{post.title}</div>
    </>
  );
}
