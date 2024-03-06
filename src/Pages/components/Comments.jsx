import { useEffect, useState } from "react";
import { getRequest } from "../../API";
import { useParams } from "react-router-dom";
import Users from "./Users";

export default function Comments({ postId, userId }) {
  const [comments, setComments] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);
  const [loading, setLoading] = useState(true);

  const { commentId } = useParams();

  // on load: fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await getRequest(`/post/${postId}/comment`);
      if (error === null) {
        setComments(data);
      } else {
        // display error
        console.log(error);
      }
      setLoading(false);
    };
    fetchComments();
  }, [commentId, postId]);

  const visibleComments = showAllComments ? comments : comments.slice(0, 3);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <h2>Comments</h2>
          {visibleComments.map((com) => {
            return (
              <div className="comment" key={com.id}>
                <Users userId={com.contactId} />
                <p>{com.content}</p>
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
