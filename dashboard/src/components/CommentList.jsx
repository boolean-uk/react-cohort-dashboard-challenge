import CommentListItem from "./CommentListItem.jsx";
function CommentList({ comments }) {
  return (
    <>
      <section>
        <h2>Comments</h2>
        {comments && comments.length > 0
          ? comments.map((comment) => (
              <CommentListItem comment={comment} key={comment.id} />
            ))
          : "No Comments yet"}
      </section>
    </>
  );
}

export default CommentList;
