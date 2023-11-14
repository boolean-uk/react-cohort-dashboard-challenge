import Comment from "./Comment";

function Comments({ comments }) {
  return (
    <div>
      {comments?.map((c) => (
        <Comment key={c.id} comment={c} />
      ))}
    </div>
  );
}

export default Comments;
