import "@styles/Post.css";
import ProfileCircle from "../ProfileCircle";
import { useContext } from "react";
import { useMutation } from "react-query";
import { deletePost } from "@services/PostService";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@routes/Root";
import PostCommentList from "./PostCommentList";

export default function Post({ children, title, id, onDelete }) {
  const currentUser = useContext(UserContext);
  const navigate = useNavigate();

  const { mutate } = useMutation(["deletePost", id], () => deletePost(id));

  const removePost = () => {
    mutate(id);
    onDelete(id);
  };

  return (
    <div className="card">
      <span
        onClick={removePost}
        className="material-symbols-outlined delete-btn"
      >
        delete
      </span>
      <div className="user-info">
        <ProfileCircle
          color={currentUser.favouriteColour}
          fullname={`${currentUser.firstName} ${currentUser.lastName}`}
        />
        <div className="user-info-text">
          <h3 style={{ padding: 0, margin: 0 }}>Test User</h3>
          <p
            className="title"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`post/${id}`)}
          >
            {title}
          </p>
        </div>
      </div>
      <p className="card-content">{children}</p>
      <PostCommentList postId={id} />
    </div>
  );
}
