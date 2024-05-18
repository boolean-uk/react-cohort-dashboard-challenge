import { useState, useEffect } from "react";

export default function AddComment({ postId }) {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");
  const [contactId, setContactId] = useState(1);

  useEffect(() => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/samisalehsaeed/post/${postId}/comment`
    )
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Error fetching comments:", error));
  }, [postId]);

  function handleSubmit(e) {
    e.preventDefault();

    fetch(
      `https://boolean-uk-api-server.fly.dev/samisalehsaeed/post/${postId}/comment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: Number(postId),
          content: content,
          contactId: Number(contactId),
        }),
      }
    )
      .then((res) => res.json())
      .then((newComment) => {
        setComments([...comments, newComment]);
        setContent("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div>
      <form className="create-comment" onSubmit={handleSubmit}>
        <input
          className="content-input"
          type="text"
          value={content}
          placeholder="Add a Comment..."
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="post-btn" type="submit">
          POST
        </button>
      </form>
      <ul className="comments">
        {comments.map((comment, index) => (
          <li key={index}>{comment.content}</li>
        ))}
      </ul>
    </div>
  );
}
