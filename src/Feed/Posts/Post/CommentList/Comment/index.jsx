function Comment(props) {
  const { comment, user } = props;

  return (
    <div className="comment">
      <p
        className="initials"
        style={{
          backgroundColor: user.favouriteColour,
        }}
      >
        {user.firstName[0]}
        {user.lastName[0]}
      </p>
      <div className="commentContent">
        <p>
          <strong>
            {user.firstName} {user.lastName}
          </strong>
        </p>
        <p>{comment.content}</p>
      </div>
    </div>
  );
}

export default Comment;
