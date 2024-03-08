import { useState } from "react"
import Comment from "./Comment"
import PropTypes from "prop-types"

function CommentList({comments}) {
  const [limitComments, setLimitComments] = useState(true)
  const revesedComments = [...comments].reverse()
  
  const buttonText = () => {
    if(limitComments){
      return "Show more comments"
    }
      return "Show only top comments"
  }


  const handleLimitComments = () =>{
    setLimitComments(!limitComments)
    
  }

  return (
    <div className="comment-list-container">
      <button onClick={handleLimitComments}>{buttonText()}</button>
      {limitComments ? 
      revesedComments.slice(0, 3).map((comment) => <Comment comment={comment} key={comment.id}> </Comment> )
      :
      revesedComments.map((comment) => <Comment comment={comment} key={comment.id}> </Comment> )
      }

    </div>
    
  )
}

CommentList.propTypes = {

  comments: PropTypes.array

}


export default CommentList