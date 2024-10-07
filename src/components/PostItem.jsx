import { Context } from "../App";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/PostItemCSS.css";

export default function PostItem({
  postItem: { id, contactId, content, title },
}) {
  const { users, comments, setComments } = useContext(Context);
  const [userDetails, setUserDetails] = useState({});
  const [postComments, setPostComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showAllComments, setShowAllComments] = useState(false);

  useEffect(() => {
    const user = users.find((user) => user.id === contactId);
    if (user) {
      const firstName = user.firstName;
      const lastName = user.lastName;
      const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
      const profileColor = user.favouriteColour;
      setUserDetails({ firstName, lastName, initials, profileColor });
    }

    const commentsForPost = comments.filter((comment) => comment.postId === id);
    setPostComments(commentsForPost);
  }, [users, comments, contactId, id]);

  console.log(postComments);

  const getUserDetails = (userId) => {
    const user = users.find((user) => user.id === userId);
    if (user) {
      const firstName = user.firstName;
      const lastName = user.lastName;
      const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
      const profileColor = user.favouriteColour;
      return { firstName, lastName, initials, profileColor };
    }
    return {
      firstName: "Unknown",
      lastName: "User",
      initials: "UU",
      profileColor: "#ccc",
    };
  };

  const handleCommentSubmit = () => {
    const newCommentObj = {
      id: comments.length + 1,
      postId: id,
      contactId: 1,
      content: newComment,
    };
    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  const visibleComments = showAllComments
    ? postComments
    : postComments.slice(0, 3);

  return (
    <li className="post">
      <article className="post">
        <div className="profile-container">
          <div
            className="profile-image"
            style={{ backgroundColor: userDetails.profileColor }}
          >
            <Link to={`/profile/${contactId}`}>
            {userDetails.initials}
            </Link>
          </div>
          <Link to={`/profile/${contactId}`}>
            {userDetails.firstName} {userDetails.lastName}
            </Link>
        </div>
        <div>
          <p>
            <Link to={`/post/${id}`}>{title}</Link>
          </p>
          <p>{content}</p>
          <ul className="comments">
            {visibleComments.map(comment => {
              const commenterDetails = getUserDetails(comment.contactId);
              return (
                <li key={comment.id} className="comment">
                  <div className="comment-profile-container">
                    <div className="profile-image" style={{ backgroundColor: commenterDetails.profileColor }}>
                      {commenterDetails.initials}
                    </div>
                    <span>{commenterDetails.firstName} {commenterDetails.lastName}</span>
                  </div>
                  <p>{comment.content}</p>
                </li>
              );
            })}
          </ul>
          {postComments.length > 3 && (
            <button onClick={() => setShowAllComments(!showAllComments)}>
              {showAllComments ? "Show Less" : "Show All"}
            </button>
          )}
          <div className="comment-input-container">
            <input
              type="text"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={handleCommentSubmit}>Post</button>
          </div>
        </div>
      </article>
    </li>
  );
}
