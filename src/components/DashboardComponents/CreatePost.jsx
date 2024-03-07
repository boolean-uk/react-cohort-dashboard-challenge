import { DataContext } from "../../App";
import { useContext, useState, useEffect } from "react";

const initState = { title: "", content: "", contactId: 2, user: null };
export default function CreatePost() {
  const users = useContext(DataContext).users;
  const user = useContext(DataContext).user;
  const posts = useContext(DataContext).posts;
  const setPosts = useContext(DataContext).setPosts;
  const [newPost, setNewPost] = useState(initState); //TODO: change this to be correct

  useEffect(() => {

    newPost.user = user
if(!newPost.user)    {    const postUser = users.find((u) => u.id === newPost.contactId);
    if (postUser) setNewPost({ ...newPost, user: postUser });}
  }, [users]);

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
        setPosts([...posts, responseData]);
      });

    setNewPost(initState);
  };

  return (
    <div className="create-post">
      <form  onSubmit={handleSubmit}>
        {user && (
          <div
            className="circle header-top"
            style={{ background: user.favouriteColour }}
          >
            {user.firstName[0] + "" + user.lastName[0]}
          </div>
        )}
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
    </div>
  );
}
