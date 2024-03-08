import PropTypes from "prop-types"
import Comment from "../Comment/Comment"
import "./Comments.css"
import { Link } from "react-router-dom"

function Comments({ comments, numberOfComments, updateComments }) {

  return (
    <div className="comments">
      {numberOfComments < comments.length && 
        <div className="previous-comment-link">
            <Link onClick={updateComments}><p>See previous comments</p></Link>
        </div>}
      {comments.slice(-numberOfComments).map((comment, i) => (
        <Comment key={i} comment={comment} />
      ))}
    </div>
  )
}

Comments.propTypes = {
    comments: PropTypes.array.isRequired,
    numberOfComments: PropTypes.number.isRequired,
    updateComments: PropTypes.func.isRequired
}

export default Comments
