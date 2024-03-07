import { useContext, useState } from "react";
import CircleAvatar from "./CircleAvatar";
import { ActiveContext, PostContext } from "./App";
import "./style/CreatePost.css";

function CreatePost() {
  const [post, setPost] = useState({ title: "", content: "" });
  const context = useContext(ActiveContext);
  const createPostContext = useContext(PostContext);
  const { active } = context;
  const { createPost } = createPostContext;
  function onChange(event) {
    setPost({});
    const name = event.target.name;
    const value = event.target.value;
    setPost({ ...post, [name]: value });
  }
  function onPost() {
    const submitPost = { ...post, contactId: active.id };
    setPost(submitPost);
    createPost(submitPost);
  }
  return (
    <div className="create-post">
      {active.firstName && (
        <CircleAvatar
          backgroundColor={active.favouriteColour}
          initials={active.firstName.charAt(0) + active.lastName.charAt(0)}
        />
      )}
      <input name="title" value={post.title} placeholder="Title" onChange={onChange}></input>
      <input name="content" value={post.content} placeholder="Content "onChange={onChange}></input>

      <button onClick={onPost}>Post</button>
    </div>
  );
}
export default CreatePost;
