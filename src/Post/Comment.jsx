import UserName from "../Low-level_components/UserName";
import deleteData from "../../js_functions/delete";
import CommentForm from "./commentForm";

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

  const toggleEditComment = () => {
    setEdit(!edit);
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
              <CommentForm edit={edit} setEdit={setEdit} comment={comment} setReloadComments={setReloadComments} reloadComments={reloadComments} postId={postId} />
            </section>
          </>
        ) : (
          <p>{comment.content}</p>
        )}
        <button onClick={deleteComment}>Delete</button>
        <button onClick={toggleEditComment}>Edit</button>
      </div>
    </>
  );
}
