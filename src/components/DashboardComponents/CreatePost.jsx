import { DataContext } from "../../App";
import { useContext, useState } from "react";

const initState = { title: "", content: "", contactId: 100000 };
export default function CreatePost() {
  const user = useContext(DataContext).user;
  const posts = useContext(DataContext).posts;
  const setPosts = useContext(DataContext).setPosts;
  const [newPost, setNewPost] = useState(initState); //TODO: change this to be correct

  function handleChange(event) {
    setNewPost({ ...newPost, [event.target.name]: event.target.value });
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();



    fetch("https://boolean-api-server.fly.dev/pkekkonen/post/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setPosts([responseData, ...posts]);
      });

      setNewPost(initState);
  };


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title"> Title: </label>
      <input
        type="text"
        id="title"
        name="title"
        onChange={handleChange}
        value={newPost.title}
      />
      <input
        type="text-area"
        id="content"
        name="content"
        placeholder="What's on your mind?"
        onChange={handleChange}
        value={newPost.content}
      />
      <button type="submit">Post</button>
    </form>
  );
}
