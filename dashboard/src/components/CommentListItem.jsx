import UserAvatar from "./UserAvatar";

function CommentListItem({ comment }) {
  return (
    <>
      <div>
        <UserAvatar
          firstName={comment.author.firstName}
          lastName={comment.author.lastName}
          color={comment.author.favouriteColour}
        />
      </div>
      <div style={{ textAlign: "left" }}>{comment.content}</div>
    </>
  );
}

export default CommentListItem;
