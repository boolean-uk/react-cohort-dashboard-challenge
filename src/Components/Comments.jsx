import CreateComment from "./CreateComment";

function Comments({ postComments, postId }) {
  if (!postComments) {
    return
  }
  return (
    <div>
      {postComments.map((comment, index) => {
        return (
          <div key={index} className="comment">
            <h4>{comment.user}</h4>
            <p>{comment.content}</p>
          </div>
        );
      })}
      <CreateComment postId={postId} />
    </div>
  );
}

export default Comments;
