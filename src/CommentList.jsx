/* eslint-disable react/prop-types */

function CommentList({ comments, authors }) {
  if (!comments || comments.length === 0) {
    return <p>No comments yet.</p>;
  }

  return (
    <div className="comment-list">
      {comments.map((comment, index) => {
        const cauthor = authors.find((author) => author.id === comment.contactId);

        console.log("Contact ID:", comment.contactId);
        console.log("Found author:", cauthor);

        if (cauthor === undefined) {
          return;
        }

       return (
        <div key={index} className="comment-item">
          <div className="user-initials">{cauthor.firstName.charAt(0)}{cauthor.lastName.charAt(0)}</div>
          <div>
            <p>{cauthor.firstName} {cauthor.lastName}</p>
            <p>{comment.content}</p>
          </div>
        </div>
      )})}
    </div>
  );
}

export default CommentList;



