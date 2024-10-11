import { useState, useContext } from "react";
import { LoginContext } from "../../../App";

export const CreateComment = (prop) => {
  const { currentUser } = useContext(LoginContext);
  const { postId } = prop;
  const { comments, setComments } = prop;

  const CommentBody = {
    "postId": postId,
    "content": "",
    "contactId": currentUser.id,
  };

  const [newComment, setNewComment] = useState(CommentBody);

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    };
    const response = await fetch(
      "https://boolean-uk-api-server.fly.dev/h602121/post/" +
        postId.toString() +
        "/comment",
      request
    );
    if (!response.ok) {
      throw new Error(`Error`);
    }
    const result = await response.json();
    console.log("Comment submitted successfully:", result);
    setComments((comments) => [...comments, newComment]);
    setNewComment({
      ...newComment,
      content: "",
    });
  };

  const HandleChange = async (e) => {
    setNewComment({
      ...newComment,
      content: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          id="comment"
          name="comment"
          onChange={HandleChange}
          value={newComment.content}
        ></input>
        <button type="submit">Add comment</button>
      </form>
    </>
  );
};
export default CreateComment;
