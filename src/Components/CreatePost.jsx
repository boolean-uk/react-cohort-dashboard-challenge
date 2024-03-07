import { useContext, useState } from "react";
import { AppContext } from "../App";
import { getInitials } from "../Utils/helpers";
function CreatePost() {
  const { posts, setPosts, loggedInUser } = useContext(AppContext);

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputChange = (event) => {
    setContent(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const addNewPost = (event) => {
    event.preventDefault();
    if (content.trim() !== "" && title.trim() !== "") {
      const payload = {
        title: title,
        content: content,
        contactId: loggedInUser.id
      };
      console.log(payload);
      fetch('https://boolean-api-server.fly.dev/Eliassoprani/post', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(response => response.json())
        .then(data => {
          console.log(posts);
          console.log(data);
          setPosts({
            title: title,
            content: content,
            contactId: loggedInUser.id,
            id: data.id
          });
        })
        .catch(error => console.error('Error adding new post:', error));

      setContent("");
      setTitle("");
      setIsInputFocused(false);
    }
  };

  return (
    <form onSubmit={addNewPost} className="createPost">
      {loggedInUser && (
        <div className="profile-picture" style={{ backgroundColor: loggedInUser.favouriteColour}}>
          <p>{getInitials(loggedInUser.name)}</p>
        </div>
      )}
      <div className="input-group">
        <input
          type="text"
          value={content}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder={isInputFocused ? "" : "What's on your mind?"}
        />
        {isInputFocused && (
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            onFocus={handleInputFocus}
            placeholder="Post Title"
          />
        )}
      </div>
      <button className="btn" type="submit">Post</button>
    </form>
  );
}

export default CreatePost;
