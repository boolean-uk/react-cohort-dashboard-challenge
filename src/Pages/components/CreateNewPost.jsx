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

  /*
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
*/

  return (
    <div className="post-card">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="What's on your mind?"
          value={formData.title}
          onChange={handleChange}
          className="inputBox"
        />
        <input
          type="text"
          name="content"
          placeholder="Description"
          value={formData.content}
          onChange={handleChange}
          className="inputBox"
        />
        <button type="submit" className="button">
          Post
        </button>
      </form>
      {creating && (
        <p className="success-message">Post has been published successfully</p>
      )}
      {error.length > 3 && <p className="error-message">{error}</p>}
    </div>
  );
}

CreateNewPost.propTypes = {
  post: PropTypes.object,
};
