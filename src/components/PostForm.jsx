import PropTypes from "prop-types";

function PostForm({ handleUpdatePost, formData, handleInputChange }) {
  return (
    <form
      className="update-post-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdatePost(formData);
      }}
    >
      <div>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Add a title.."
          value={formData.title ?? ""}
          onChange={handleInputChange}
        ></input>
      </div>

      <button type="submit" className="update-btn">
        Update
      </button>

      <div className="textarea-section">
        <textarea
          id="content"
          name="content"
          type="text"
          placeholder="Add a comment..."
          value={formData.content ?? ""}
          onChange={handleInputChange}
        ></textarea>
      </div>
    </form>
  );
}

PostForm.propTypes = {
  handleInputChange: PropTypes.func,
  formData: PropTypes.object,
  handleUpdatePost: PropTypes.func,
};

export default PostForm;
