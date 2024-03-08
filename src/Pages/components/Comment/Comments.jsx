import { useEffect, useState } from "react";
import { getRequest } from "../../../API";
import { useParams } from "react-router-dom";
import CommentUser from "./CommentUser";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);
  const [loading, setLoading] = useState(true);

  const { commentId } = useParams();

  // on load: fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      const { data, error } = await getRequest(`/post/${postId}/comment`);
      if (error === null) {
        setComments(data);
        console.log(data);
      } else {
        console.log(error);
      }
      setLoading(false);
    };
    fetchComments();
  }, [postId, commentId]);

  // show all comments if showAllComments is true, otherwise show the first 3
  const visibleComments = showAllComments ? comments : comments.slice(0, 3);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <h2>Comments</h2>
          {visibleComments.map((com) => {
            return (
              <div key={com.id}>
                <CommentUser userId={com.contactId} />
                <p className="comment-box ">{com.content}</p>
              </div>
            );
          })}
          {comments.length > 3 && !showAllComments && (
            <button onClick={() => setShowAllComments(true)}>
              See previous comments
            </button>
          )}
        </>
      )}
    </>
  );
}
