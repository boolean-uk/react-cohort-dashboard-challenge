import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../../API";

export default function NewComment({ postId }) {
  const DEFAULT_POST = {
    content: "",
    postId: postId,
    contactId: 1,
  };
  const [formData, setFormData] = useState({ ...DEFAULT_POST });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      content: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitCallBack(formData).then((error) => {
      if (error) {
        setError(error);
      } else {
        setFormData({ ...DEFAULT_POST });
      }
    });
  };

  async function submitCallBack(post) {
    return await postRequest(`/post/${postId}/comment`, post).then(
      ({ data, error }) => {
        if (data) {
          navigate("/");
          return null;
        } else {
          return error[0];
        }
      }
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="comment">
        <input
          type="text"
          name="content"
          placeholder="Add a comment..."
          value={formData.content}
          onChange={handleChange}
        />
        <button type="submit"> Post</button>
      </form>
      {error.length > 3 && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
