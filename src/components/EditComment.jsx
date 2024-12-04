import { useContext, useState } from "react";
import { DataContext } from "../App";
import { baseUrl } from "../App";

export default function EditComment({
  post,
  comment,
  comments,
  setComments,
  setShowEditBox,
}) {
  const [content, setContent] = useState(comment?.content);
  const { user } = useContext(DataContext);

  const contactId = user?.id;
  const postId = post?.id;
  const fetchUrl = `${baseUrl}/post/${postId}/comment/${comment?.id}`;

  function handleFormSubmit(event) {
    event.preventDefault();

    fetch(fetchUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId,
        contactId,
        content,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setComments([...comments, data]);
      });

    setShowEditBox(false);
  }

  return (
    <>
      <form className="edit-post-form" onSubmit={handleFormSubmit}>
        <textarea
          name=""
          className="edit-post-filed"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <div className="save-btn-div">
          <button
            disabled={content === ""}
            className={`edit-save-btn ${content === "" ? "disabled" : ""}`}
          >
            Save
          </button>
          <button
            className="edit-cancel-btn"
            onClick={() => {
              setShowEditBox(false);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
