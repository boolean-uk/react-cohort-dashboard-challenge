import CreateComment from "./CreateComment";

function Comments({ postComments, postId }) {
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
