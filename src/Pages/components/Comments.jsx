import { useEffect, useState } from "react";
import { getRequest } from "../../API";
import { useParams } from "react-router-dom";

export default function Comments({ postId }) {
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(true);

  const { commentId } = useParams();

  // on load: fetch articles
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
        <>
          {comment.map((com) => {
            return (
              <div key={com.id}>
                <p>{com.content}</p>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
