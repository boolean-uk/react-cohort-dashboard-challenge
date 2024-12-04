import { useContext, useState, useEffect } from "react";
import { DataContext } from "../App";
import { baseUrl } from "../App";

export default function EditPost({ post, showEditBox, setShowEditBox }) {
  const { user, posts, setPosts } = useContext(DataContext);
  const [content, setContent] = useState(post?.content);
  const [title, setTitle] = useState("");

  const subContent = content[0]?.toUpperCase() + content.substring(1, 20);
  const contactId = user?.id;
  const fetchUrl = `${baseUrl}/post/${post?.id}`;

  useEffect(() => {
    setTitle(subContent);
  }, [content, subContent]);

  function handleFormSubmit(event) {
    event.preventDefault();

    fetch(fetchUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contactId,
        title,
        content,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts([...posts, data]);
      });

    setShowEditBox(false);
  }

  return (
    <>
      <form className="edit-post-form" onSubmit={handleFormSubmit}>
        <textarea
          name=""
          id=""
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
