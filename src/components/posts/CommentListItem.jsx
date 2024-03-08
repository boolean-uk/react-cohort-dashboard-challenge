export default function CommentListItem(props) {
  const getInitials = (firstName, lastName) => {
    const firstInitial = firstName ? firstName[0].toUpperCase() : "";
    const lastInitial = lastName ? lastName[0].toUpperCase() : "";
    return `${firstInitial}${lastInitial}`;
  };

  const initials = getInitials(
    props.commentUser.firstName,
    props.commentUser.lastName
  );

  return (
    <div className="comment">
      <div className="comment-topper">
        <div
          className="header-profile-icon"
          style={{ backgroundColor: props.commentUser.favouriteColour }}
        >
          {initials}
        </div>
        <p>
          {props.commentUser.firstName} {props.commentUser.lastName}{" "}
        </p>
      </div>
      <div className="comment-content">
        <p>{props.comment.content}</p>
      </div>
    </div>
  );
}
