import  { useState } from "react";

function CommentForm() {
  const [comment, setComment] = useState("");

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    document.getElementById("displayedComment").innerText = comment;
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Add a comment"
          value={comment}
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      
      <p id="displayedComment"></p>
    </>
  );
}

export default CommentForm;
