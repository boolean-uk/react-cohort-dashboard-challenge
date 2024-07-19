import { useContext, useState } from "react";
import { appContext } from "../App";
import { commentContext } from "./PostItem";
import UserIcon from "./UserIcon";
import SubmitIcon from "../assets/submit-icon.svg"

export default function AddComment({ post }) {
  const { allPosts, setAllPosts, loggedInUser, sortedPosts } =
    useContext(appContext);
  const {comments, setComments} = useContext(commentContext)
  const [newComment, setNewComment] = useState({
    id: "",
    postId: "",
    contactId: "",
    content: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    newComment.id = comments.length + 1;
    console.log("new comment", newComment);

    fetch(
      `https://boolean-uk-api-server.fly.dev/zainabch123/post/${post.id}/comment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      }
    )
      .then((res) => res.json())
      .then((data) => setComments([data, ...comments]));

      setNewComment({
        id: "",
        postId: "",
        contactId: "",
        content: "",
      });
  }


  function handleInput(event) {
    const { name, value } = event.target;
    setNewComment({
      ...newComment,
      postId: post.id,
      contactId: loggedInUser.id,
      [name]: value,
    });
  }

  // console.log("new comment", newComment);


  return (
    <div className="add-comment">
      <UserIcon userInfo={loggedInUser} />
      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="comment-input"
          name="content"
          placeholder="Add comment"
          onChange={handleInput}
          value={newComment.content}
        ></input>
        <button
          className="comment-submit"
          type="submit"
          onClick={function () {
            handleSubmit(event);
          }}
        >
          <img src={SubmitIcon} alt="submit-icon"/>
        </button>
      </form>
    </div>
  );
}
