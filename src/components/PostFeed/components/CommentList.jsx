import Comment from "./Comment"

function CommentList({comments}) {

  return (
    <div>
        {comments.map((comment, index) => 
        <Comment comment={comment} key={index}> </Comment>
        )}
    </div>
  )
}

export default CommentList