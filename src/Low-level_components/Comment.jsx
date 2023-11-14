import UserName from "./UserName";
import deleteData from "../../js_functions/delete";

export default function Comment({
  comment,
  reloadContacts,
  setReloadComments,
  reloadComments,
  postId
}) {
  const deleteComment = () => {
    deleteData(`post/${postId}/comment/${comment.id}` )
    setReloadComments(!reloadComments)  
    }

  return (
    <>
      <div className="comment">
        <UserName
          contactId={comment.contactId}
          reloadContacts={reloadContacts}
        />
        <p>{comment.content}</p>
        <button onClick={deleteComment}>Delete</button>
      </div>
    </>
  );
}
