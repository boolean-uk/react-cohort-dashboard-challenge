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
    <>
      <div
        className="header-profile-icon"
        style={{ backgroundColor: props.commentUser.favouriteColour }}
      >
        {initials}
      </div>
      <p>comment: {props.comment.content}</p>;
    </>
  );
}
