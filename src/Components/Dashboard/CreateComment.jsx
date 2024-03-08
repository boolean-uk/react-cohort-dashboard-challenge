import { useContext, useState } from "react";
import { AppContext } from "../../App";
import PropTypes from "prop-types";

function CreateComment({ post, comments, setComments }) {
  const { currentUser } = useContext(AppContext);
  const [formdata, setFormdata] = useState({
    contactId: 0,
    postId: 0,
    content: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formdata.content) {
      fetch(
        `https://boolean-api-server.fly.dev/maritmoe/post/${post.id}/comment`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formdata,
            contactId: currentUser.id,
            postId: post.id,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => console.log(data));
      setComments([
        ...comments,
        {
          ...formdata,
          contactId: currentUser.id,
          postId: post.id,
        },
      ]);
      setFormdata({
        contactId: currentUser.id,
        postId: post.id,
        content: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {currentUser && (
        <p
          className="initials"
          style={{ background: currentUser.favouriteColour }}
        >
          {currentUser.firstName[0] + currentUser.lastName[0]}
        </p>
      )}
      <input
        className="comment-input"
        type="text"
        placeholder="Add a comment..."
        onChange={(e) =>
          setFormdata({
            ...formdata,
            content: e.target.value,
          })
        }
        value={formdata.content}
      />
      <button className="comment-button" type="submit">
        Comment
      </button>
    </form>
  );
}

CreateComment.propTypes = {
  comments: PropTypes.array,
  setComments: PropTypes.func,
  post: PropTypes.object,
};

export default CreateComment;
