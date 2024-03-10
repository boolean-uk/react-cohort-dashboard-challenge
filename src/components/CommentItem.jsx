export default function CommentItem(props) {
  const { comment, post, circleStyle } = props;

  return (
    <div className="comment">
      <div className="circle" style={circleStyle}>
        {`${post.firstName[0]}${post.lastName[0]}`.toUpperCase()}
      </div>
      <div className="comment-content">
        <p className="name">
          <strong>
            {post.firstName} {post.lastName}
          </strong>
        </p>
        <p className="content">{comment.content}</p>
      </div>
    </div>
  );
}
