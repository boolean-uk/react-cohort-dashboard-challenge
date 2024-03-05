import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../../API";

const DEFAULT_POST = {
  contactId: 1,
  title: "",
  content: "",
};

export default function CreateNewPost() {
  const [formData, setFormData] = useState({ ...DEFAULT_POST });
  const [error, setError] = useState("");
  const [creating, setCreating] = useState(false);
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
        setCreating(true);
        setFormData({ ...DEFAULT_POST });
      }
    });
  };

  async function submitCallBack(post) {
    return await postRequest("/post", post).then(({ data, error }) => {
      if (data) {
        navigate("/");
        return null;
      } else {
        return error[0];
      }
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="What's on your mind?"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="content"
          placeholder="Description"
          value={formData.content}
          onChange={handleChange}
        />
        <button type="submit">Post</button>
      </form>
      {creating && <p>Post has been published successfully</p>}
      {error.length > 3 && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}

CreateNewPost.propTypes = {
  post: PropTypes.object,
};
