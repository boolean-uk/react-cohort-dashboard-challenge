import { DataContext } from "../../App";
import { useContext, useState, useEffect } from "react";

const initState = { title: "", content: ""};
export default function CreatePost() {
  const users = useContext(DataContext).users;
  const user = useContext(DataContext).user;
  const posts = useContext(DataContext).posts;
  const setPosts = useContext(DataContext).setPosts;
  const [newPost, setNewPost] = useState(initState); 


  function handleChange(event) {
    setNewPost({ ...newPost, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(user)
    newPost.contactId = user.id;
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
              responseData.user = user;

        setPosts([...posts, responseData]);
      });

    setNewPost(initState);
  };

  return (
    <div className="create-post">
      <form onSubmit={handleSubmit}>
        {user && (
          <div
            className="circle header-top"
            style={{ background: user.favouriteColour }}
          >
            {user.firstName[0] + "" + user.lastName[0]}
          </div>
        )}

        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
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
