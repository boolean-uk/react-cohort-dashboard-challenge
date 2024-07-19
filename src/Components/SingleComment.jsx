import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PostContext from "./PostContext";

function SingleComment({ comment, author }) {
  const { setFocusUser } = useContext(PostContext);

  const navigate = useNavigate();
  const handleProfileClick = () => {
    setFocusUser(author);
    navigate("/profile");
  };

  return (
    <div className="comment-content">
      <p
        className="user-profile-button"
        onClick={handleProfileClick}
      >{`${author.firstName[0]} ${author.lastName[0]}`}</p>
      <div className="comment-text-area">
        <p
          className="comment-author"
          onClick={handleProfileClick}
        >{`${author.firstName} ${author.lastName}`}</p>
        <p>{comment.content}</p>
      </div>
    </div>
  );
}

export default SingleComment;
