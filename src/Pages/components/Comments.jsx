import { useEffect, useState } from "react";
import { getRequest } from "../../API";
import { useParams } from "react-router-dom";
import Users from "./Users";

export default function Comments({ postId, userId }) {
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(true);

  const { commentId } = useParams();

  // on load: fetch comments
  useEffect(() => {
    const runEffect = async () => {
      const { data, error } = await getRequest(`/post/${postId}/comment`);
      if (error === null) {
        setComment(data);
      } else {
        // display error
        console.log(error);
      }
      setLoading(false);
    };
    runEffect();
  }, [commentId, postId]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className="comment">
          <h2>Comments</h2>
          {comment.map((com) => {
            return (
              <div key={com.id}>
                <Users userId={com.contactId} />
                <p>{com.content}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
