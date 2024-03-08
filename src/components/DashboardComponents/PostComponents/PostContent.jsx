import { DataContext } from "../../../App";
import { useContext } from "react";

export default function PostContent({
  post,
  editing,
  editedPost,
  setEditedPost,
}) {
  const user = useContext(DataContext).user;
  const posts = useContext(DataContext).posts;

  return (
    <>
      {!editing && <div className="post">{post.content}</div>}
      {editing && (
        <input
          type="text"
          id="post"
          name="post"
          className="post"
          onChange={(event) =>
            setEditedPost({
              ...editedPost,
              content: event.target.value,
            })
          }
          value={editedPost.content}
        />
      )}
    </>
  );
}
