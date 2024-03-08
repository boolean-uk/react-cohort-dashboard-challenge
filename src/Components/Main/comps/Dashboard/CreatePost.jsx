import { useState, useContext, useEffect } from "react";
import { MyContext } from "../../../../App.jsx";
import { Link } from "react-router-dom";

const INITIAL_POST = {
  title: "",
  content: "",
};
export default function CreatePost() {
  const { currentUser, setPosts, posts } = useContext(MyContext);
  const [post, setPost] = useState(INITIAL_POST);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("lastPost"));
    console.log(local);
    if (local) {
      post.title = local.title;
      post.content = local.content;
      setPost({ ...post, title: local.title, content: local.content });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
    localStorage.setItem("lastPost", JSON.stringify(post));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.removeItem("lastPost");
    if (post.title.length > 0 || post.content.length > 0) {
      post.contactId = currentUser.id;
      const response = await fetch(
        `https://boolean-api-server.fly.dev/knutsr0501/post`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(post),
        }
      );

      const result = await response.json();
      setPosts([post, ...posts]);
      console.log(result);
    }
    setPost({ ...post, title: "", content: "" });
  };
  const indexFirst = currentUser.firstName[0];
  const indexLast = currentUser.lastName[0];

  return (
    <div className="create-post">
      <form onSubmit={handleSubmit}>
        <div className="img-title-container">
          <Link to={`/profile/${currentUser.id}`}>
            <div
              className="profile-icon-div"
              style={{
                backgroundColor: currentUser.favouriteColour,
              }}
            >
              {indexFirst}
              {indexLast}
            </div>
          </Link>
          <label htmlFor="post-input" className="label">
            Title:
            <input
              className="post-input"
              type="text"
              name="title"
              onChange={handleChange}
              value={post.title}
            ></input>
          </label>
        </div>
        <div className="input-button-container">
          <label htmlFor="create-textarea" className="label">
            Content:
            <textarea
              className="create-textarea"
              name="content"
              onChange={handleChange}
              value={post.content}
              cols={50}
              rows={3}
            ></textarea>
          </label>
          <input type="submit" value="Post!"></input>
        </div>
      </form>
    </div>
  );
}
