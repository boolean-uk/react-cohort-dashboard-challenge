import { getRequest, updateRequest } from "../../../API";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ModifyComment() {
  // state
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modified, setModified] = useState(false);

  // navigation
  const { commentId, postId } = useParams();
  const navigate = useNavigate();

  // on load: fetch comment
  useEffect(() => {
    const runEffect = async () => {
      const { data, error } = await getRequest(`/post/${postId}/comment`);
      if (error === null) {
        setComment(data);
      } else {
        console.log(error);
      }
      setLoading(false);
    };
    runEffect();
  }, [postId]);

  async function submitCallback(payload) {
    return await updateRequest(
      `/post/${postId}/comment/${payload.id}`,
      payload
    ).then(({ data, error }) => {
      if (data) {
        navigate(`/post/${data.id}`);
        setModified(true);
        return null;
      } else {
        return error[0];
      }
    });
  }

  return (
    <div>
      <h1>Modify Your comment</h1>
      {loading && <p>Loading...</p>}
      {!loading && (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const error = await submitCallback(comment);
            if (error) {
              console.log(error);
            }
          }}
        >
          <input
            type="text"
            name="title"
            placeholder={comment.title}
            value={comment.title}
            onChange={(e) => setComment({ ...comment, title: e.target.value })}
          />
          <input
            type="text"
            name="content"
            placeholder={comment.content}
            value={comment.content}
            onChange={(e) =>
              setComment({ ...comment, content: e.target.value })
            }
          />
          <button type="submit">Modify</button>
        </form>
      )}
      {modified && <p>The comment has been modified.</p>}
    </div>
  );
}
