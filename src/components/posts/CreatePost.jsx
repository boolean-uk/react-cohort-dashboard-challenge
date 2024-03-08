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

    localStorage.clear();

    setPost(getInitialPost);
  };

  return (
    <div className="post">
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={post.title}
          ></input>
        </label>
        <br />
        <label>
          Content:
          <textarea
            name="content"
            onChange={handleChange}
            value={post.content}
            cols={50}
            rows={5}
          ></textarea>
        </label>
        <br />
        <input type="submit" value="Post!"></input>
      </form>
    </div>
  );
}
