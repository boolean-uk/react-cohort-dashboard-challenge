import UserName from "./UserName";
import deleteData from "../../js_functions/delete";
import putData from "../../js_functions/put"

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

const editComment = () => [
    putData(`post/${postId}/comment/${comment.id}` )
]

  return (
    <>
      <div className="comment">
        <UserName
          contactId={comment.contactId}
          reloadContacts={reloadContacts}
        />
        <p>{comment.content}</p>
        <button onClick={deleteComment}>Delete</button>
        <button onClick={editComment}>Edit</button>
      </div>
    </>
  );
}
