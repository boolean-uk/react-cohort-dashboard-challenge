import CommentListItem from "./CommentListItem"
import NewCommentForm from "./NewCommentForm";

//commentlist
function CommentList(props) {
  const {  comments, contacts, onAddComment, postId } = props
  return (
    <ul className="comment-list">
      <li className="add-comment">
        <h3>Add New Comment:</h3>
        <NewCommentForm 
        onAddComment={onAddComment} 
        postId={postId}/>
      </li>
      {comments.map((comment, index) => 
      (
        <CommentListItem 
        key={index} 
        comment={comment} 
        contacts={contacts}/>
      ))}
    </ul>
  )
}

export default CommentList