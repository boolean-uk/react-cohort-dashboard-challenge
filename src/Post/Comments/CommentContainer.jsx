import UserInitials from "../../Low-level_components/UserInitials";
import Comment from "./Comment";
import { useState } from "react";
export default function CommentContainer({
  comment,
  reloadContacts,
  setReloadComments,
  reloadComments,
  postId,
}) {
  const [edit, setEdit] = useState(false);

  return (
    <>
      {comment && (
        <li className="form-container comment-container">
          <UserInitials
            contactId={comment.contactId}
            reloadContacts={reloadContacts}
          />
          <Comment
            edit={edit}
            setEdit={setEdit}
            comment={comment}
            postId={postId}
            reloadContacts={reloadContacts}
            setReloadComments={setReloadComments}
            reloadComments={reloadComments}
          />
        </li>
      )}
    </>
  );
}
