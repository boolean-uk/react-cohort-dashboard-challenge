import MainPropic from "./MainPropic";
import "./CreatePost.css";
import { NewPostContext } from "./App";
import { useContext } from "react";

export default function CreatePost() {
  const [isNewPost, setNewPost] = useContext(NewPostContext);

  async function handleSubmit(e) {
    e.preventDefault();

    const postContent = e.target.postContent.value;

    if (postContent == "") {
      alert("Post field can not be empty");
    } else {
      await fetch("https://boolean-uk-api-server.fly.dev/AtikoSpeed/post", {
        method: "POST",
        headers: {
          "content-type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          title: "New Post",
          content: postContent,
          contactId: 0,
        }),
      }).then(() => {
        setNewPost(!isNewPost);
        e.target.postContent.value = "";
      });
    }
  }

  return (
    <div className="post-box">
      <MainPropic />
      <form method="post" id="create-post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="postContent"
          placeholder="What's on your mind?"
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
