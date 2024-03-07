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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
        <div className="input-wrapper">
          <input
            className="inputBox"
            type="text"
            name="content"
            placeholder="Add a comment..."
            value={formData.content}
            onChange={handleChange}
          />
          <button type="submit" className="submit-button">
            <img
              src="https://static.thenounproject.com/png/105496-200.png"
              alt="buttonpng"
              border="0"
              width="20"
              height="20"
            />
          </button>
        </div>
      </form>

      {error.length > 3 && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
