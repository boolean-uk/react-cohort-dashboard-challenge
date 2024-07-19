import { useContext, useState } from "react";
import PostContext from "./PostContext";

function UserControls() {
  const { loggedInUser, newPosts, setNewPosts } = useContext(PostContext);
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };
  const handleNewPost = async () => {
    const newPost = {
      title: "New Post",
      content: userInput,
      contactId: 0,
    };
    console.log(newPost);
    try {
      const response = await fetch(
        "https://boolean-uk-api-server.fly.dev/JDC-horizons/post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        }
      );
    } catch (error) {
      console.error("Error:", error);
    }
    setNewPosts([...newPosts, newPost]);
    setUserInput("");
  };

  return (
    <div id="user-controls-container">
      <p className="user-profile-button">{`${loggedInUser.firstName[0]}${loggedInUser.lastName[0]}`}</p>
      <input
        placeholder="What's on your mind?"
        value={userInput}
        onChange={handleUserInput}
      ></input>
      <button onClick={handleNewPost}>Post</button>
    </div>
  );
}

export default UserControls;
