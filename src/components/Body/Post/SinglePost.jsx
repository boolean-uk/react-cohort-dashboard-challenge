/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import "../Body.css";
export default function SinglePost({ posts }) {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));
  return (
    <>
      <div className="main-body">
        <div className="post-box">
          <div className="post-header">
            <div className="post-title">{post.title}</div>
            <div className="profile-icon">AA</div>
            <div className="post-user">@user_name</div>
          </div>
          <div className="post-body">{post.content}</div>
        </div>
      </div>
    </>
  );
}
