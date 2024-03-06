import { useContext } from "react";
import "./OriginalPost.css";
import { PostContext } from "../PostItem";
import ProfileCircle from "../../ProfileCircle/ProfileCircle";
import { Link } from "react-router-dom";
function OriginalPost() {
  const { post, originalPostUser } = useContext(PostContext);

  return (
    <div className="post-container">
      <div className="d-flex py-3 align-items-start">
        <ProfileCircle user={originalPostUser}></ProfileCircle>
        <div className="info">
          <h4>
            {originalPostUser.firstName} {originalPostUser.lastName}
          </h4>
          <Link to={`/posts/${post.id}`}>
            {" "}
            <small>{post.title}</small>
          </Link>
        </div>
      </div>
      <p className="post-content">{post.content}</p>
    </div>
  );
}

export default OriginalPost;
