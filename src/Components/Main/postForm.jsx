import ProfileLogo from "../Reusable/profileLogo";
import { useContext, useState } from "react";
import { postURL, post, get } from "../client";
import { UserAndPostContext } from "../../App";

export default function PostForm() {
  const { setPosts } = useContext(UserAndPostContext);

  const userId = "1";

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    contactId: 1,
  });

  const handleChange = (event) => {
    const value = event.target.value;

    setNewPost({
      ...newPost,
      title: value.slice(0, 20) + "...",
      content: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make the POST request
      const response = await post(postURL, newPost);

      // Check if the POST request was successful
      if (response.ok) {
        // Fetch the updated posts after the successful post
        const postsResponse = await get(`${postURL}`);

        // Update the posts in your context
        setPosts(postsResponse);

        // Optionally, you can also update the local state if needed
        setNewPost({
          title: "",
          content: "",
          contactId: 1,
        });
      } else {
        // Handle error if the POST request was not successful
        console.error("Post request failed:", response.statusText);
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="postForm">
      <ProfileLogo id={userId} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => handleChange(event)}
          placeholder="   What's on your mind?"
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
