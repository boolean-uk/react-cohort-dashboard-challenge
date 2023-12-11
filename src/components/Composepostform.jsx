import { useState } from "react";
function ComposePostForm() {
  const [postText, setPostText] = useState(""); 

  const handleInputChange = (e) => {
    setPostText(e.target.value); 
  };

  const handlePostClick = (e) => {
    e.preventDefault();
   
    document.getElementById("displayedText").innerText = postText;
  };

  return (
    <>
      <form id="firstform">
        <input
          name="user"
          type="text"
          placeholder="What's on your mind?"
          value={postText}
          onChange={handleInputChange} 
        ></input>
        <button className="form__submit" onClick={handlePostClick}>
          Post
        </button>

      </form>
      <p id="displayedText"></p>
    </>
  );
}
export default ComposePostForm;
