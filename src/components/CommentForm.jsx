import { useContext, useState } from "react";
import Avatar from "react-avatar";
import { Context } from "../App";
import { CommentContext } from "./Comments";

function CommentForm() {
    const { post, comments, setComments } = useContext(CommentContext);
    const initCommentInput = {
      contactId: 10,
      postId: post ? post.id : null,
      content: "",
    };
    const [commentInput, setCommentInput] = useState(initCommentInput);
    const { userLoggedIn } = useContext(Context)

    function handleSubmit(event) {
      event.preventDefault();

      fetch(
        `https://boolean-api-server.fly.dev/maha897/post/${post.id}/comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(commentInput),
        }
      )
        .then((response) => response.json())
        .then((newComment) => {
          setComments([...comments, newComment]);
          setCommentInput(initCommentInput);
        });
    }

    function handleChange(event) {
      const { name, value } = event.target;
      setCommentInput({ ...commentInput, [name]: value });
    }

    return (
      <form className="comment-form" onSubmit={handleSubmit}>
        <div className="comment-form-container">
          <div id="c-avatar">
            <Avatar
              className="header-avatar"
              name={`${userLoggedIn.firstName} ${userLoggedIn.lastName}`}
              round={true}
              size={50}
            />
          </div>

          <input
            name="content"
            placeholder="Add a comment..."
            onChange={handleChange}
            value={commentInput.content}
          />
          <button type="submit">Comment</button>
        </div>
      </form>
    );
}

export default CommentForm