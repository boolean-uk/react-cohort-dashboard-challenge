import Comment from "../../comment/comment";

const CommentsList = ({ comments, post, contacts }) => {
  return (
    <ul className="comments">
      <p id="previous">See previous comments</p>

      {comments[post.id]?.map((c) => {
        return <Comment key={c.id} c={c} contacts={contacts} />;
      }) || "loading comments ... "}
    </ul>
  );
};

export default CommentsList;
