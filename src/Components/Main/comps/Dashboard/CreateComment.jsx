import { useContext, useEffect } from "react";
import { MyContext } from "../../../../App.jsx";

export default function CreateComment(props) {
  const { currentUser, newComment, setNewComment } = useContext(MyContext);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("lastComment"));
    console.log(local);
    if (local) {
      newComment.content = local.content;
      setNewComment({ ...newComment, content: local.content });
    }
  }, []);

  const handleChange = (e) => {
    setNewComment({
      ...newComment,
      content: e.target.value,
    });
    localStorage.setItem("lastComment", JSON.stringify(newComment));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("lastComment");
    if (newComment.content.length > 0) {
      props.setComments([...props.comments, newComment]);
      newComment.contactId = currentUser.id;
      newComment.postId = props.post.id;
      fetch(
        `https://boolean-api-server.fly.dev/knutsr0501/post/${props.post.id}/comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        }
      );
    }
    setNewComment({ ...newComment, content: "" });
  };
  return (
    <div className="create-comment">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="postComment"
          name="postComment"
          onChange={handleChange}
          value={newComment.content}
          placeholder="Write something"
        />

        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
