import { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);

  const initialComments = []

  useState(() => {
    setComments(initialComments);
  }, []);

  return (
    <>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </>
  );
};

export default Comments;
