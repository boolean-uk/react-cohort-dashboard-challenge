import { useState, useContext } from "react";

import { PostContext } from "../../App";

const emptyPost = {
  title: "",
  content: "",
  contactId: 1,
};

export default function CreatePostForm() {

    const postContext = useContext(PostContext);

    const [newPost, setNewPost] = useState(emptyPost);

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        if (inputName === "title") {
            setNewPost({...newPost, title: inputValue})
        }
        if (inputName === "content") {
            setNewPost({...newPost, content: inputValue})
        }
    }

    const handlePost = (event) => {
      event.preventDefault();
      console.log("Handle POST a new Post");

      fetch("https://boolean-api-server.fly.dev/svennas/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });

      postContext.setPosts((post) => [...post, newPost]);
      setNewPost(emptyPost);
    };

    return (
      <form>
        <div className="create_post_layout">
          <input
            className="title_input"
            type="text"
            id="title"
            name="title"
            placeholder="Title it!"
            value={newPost.title}
            onChange={handleChange}
          />
          <p></p>
          <input
            className="content_input"
            type="text"
            id="content"
            name="content"
            placeholder="What's on your mind?"
            value={newPost.content}
            onChange={handleChange}
          />
          <button className="post_button" type="submit" onClick={handlePost}>
            <p className="button_text">Post</p>
          </button>
        </div>
      </form>
    );
}