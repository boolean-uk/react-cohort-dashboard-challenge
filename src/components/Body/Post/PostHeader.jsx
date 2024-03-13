/* eslint-disable react/prop-types */
import "../Body.css";

export default function PostHeader({ post, user }) {
  return (
    <>
      <div className="post-header">
        <div className="profile-icon">
          {user.firstName?.charAt(0)}
          {user.lastName?.charAt(0)}
        </div>
        <div className="post-title">{post.title}</div>
        <div className="post-user">
          @{user.firstName}_{user.lastName}
        </div>
      </div>
    </>
  );
}
