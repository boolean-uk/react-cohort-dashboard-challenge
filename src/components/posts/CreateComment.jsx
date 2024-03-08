import { useContext, useState } from "react";
import { MyContext } from "../../App";

function getInitialComment() {
  const content = localStorage.getItem("content");

  return {
    content: content || "",
  };
}

export default function CreateComment(props) {
  const [comment, setComment] = useState(getInitialComment);

  const context = useContext(MyContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment({
      ...comment,
      [name]: value,
      contactId: context.user.id,
      postId: props.post.id,
    });
    localStorage.setItem(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setComments([...props.comments, comment]);

    fetch(
      `https://boolean-api-server.fly.dev/StevenTPh/post/${props.post.id}/comment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      }
    );

    localStorage.clear();

    setComment(getInitialComment);
  };

  const getInitials = (firstName, lastName) => {
    const firstInitial = firstName ? firstName[0].toUpperCase() : "";
    const lastInitial = lastName ? lastName[0].toUpperCase() : "";
    return `${firstInitial}${lastInitial}`;
  };

  const initials = getInitials(context.user.firstName, context.user.lastName);

  return (
    <>
      <form onSubmit={handleSubmit} className="create-comment">
        <div
          className="header-profile-icon"
          style={{ backgroundColor: context.user.favouriteColour }}
        >
          {initials}
        </div>
        <textarea
          type="text"
          name="content"
          rows={3}
          cols={40}
          placeholder="Write a comment..."
          onChange={handleChange}
          value={comment.content}
        ></textarea>

        <input type="submit" value="Comment"></input>
      </form>
    </>
  );
}
