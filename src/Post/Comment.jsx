import UserName from "../Low-level_components/UserName";
import deleteData from "../../js_functions/delete";
import CommentForm from "./commentForm";
import putData from "../../js_functions/put";

export default function Comment({
  edit,
  setEdit,
  comment,
  reloadContacts,
  setReloadComments,
  reloadComments,
  postId,
}) {
  const deleteComment = () => {
    deleteData(`post/${postId}/comment/${comment.id}`);
    setReloadComments(!reloadComments);
  };

  const editComment = () => {
    setEdit(!edit);
    // putData(`post/${postId}/comment/${comment.id}`);
  };

  return (
    <>
      <div className="comment">
        <UserName
          contactId={comment.contactId}
          reloadContacts={reloadContacts}
        />
        {edit ? (
          <>
            <div className="empty"></div>
            <section className="comment edit-form">
              <CommentForm edit={edit} comment={comment} />
            </section>
          </>
        ) : (
          <p>{comment.content}</p>
        )}
        <button onClick={deleteComment}>Delete</button>
        <button onClick={editComment}>Edit</button>
      </div>
    </>
  );
}
