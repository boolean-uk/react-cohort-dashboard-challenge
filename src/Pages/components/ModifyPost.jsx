import { getRequest, updateRequest } from "../../API";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ModifyPost() {
  // state
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modified, setModified] = useState(false);

  // navigation
  const { postId } = useParams();
  const navigate = useNavigate();

  // on load: fetch post
  useEffect(() => {
    const runEffect = async () => {
      const { data, error } = await getRequest(`/post/${postId}`);
      if (error === null) {
        setPost(data);
      } else {
        // display error
        console.log(error);
      }
      setLoading(false);
    };
    runEffect();
  }, [postId]);

  async function submitCallback(payload) {
    return await updateRequest(`/post/${payload.id}`, payload).then(
      ({ data, error }) => {
        if (data) {
          navigate(`/post/${data.id}`);
          setModified(true);
          return null;
        } else {
          return error[0];
        }
      }
    );
  }

  return (
    <div>
      <h1>Modify Your Post</h1>
      {loading && <p>Loading...</p>}
      {!loading && (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const error = await submitCallback(post);
            if (error) {
              console.log(error);
            }
          }}
        >
          <input
            type="text"
            name="title"
            placeholder={post.title}
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
          <input
            type="text"
            name="content"
            placeholder={post.content}
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
          />
          <button type="submit">Modify</button>
        </form>
      )}
      {modified && <p>The post has been modified.</p>}
    </div>
  );
}
