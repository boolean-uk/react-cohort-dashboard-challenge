import { useState, useContext } from "react";
import { MyContext } from "../../App";

function getInitialPost() {
  const title = localStorage.getItem("title");
  const content = localStorage.getItem("content");


  return {
    title: title || "",
    content: content || "",
  };
}

export default function CreatePost() {
  const [post, setPost] = useState(getInitialPost);

  const context = useContext(MyContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
      contactId: context.user.id
    });
    localStorage.setItem(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    context.setPosts([post, ...context.posts]);

    fetch(`https://boolean-api-server.fly.dev/StevenTPh/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

    localStorage.clear();

    setPost(getInitialPost);
  };

  return (
    <div className="post">
      <form onSubmit={handleSubmit} className="create-post">

          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={post.title}
          ></input>

        <br />
       
          
          <textarea
            name="content"
            placeholder="What's on your mind?"
            onChange={handleChange}
            value={post.content}
            cols={50}
            rows={3}
          ></textarea>
        
        <br />
        <input type="submit" value="Post!"></input>
      </form>
    </div>
  );
}
