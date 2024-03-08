import { useState } from "react"
import PropTypes from 'prop-types';
import Comment from "./components/Comment"

import "./styles.css"

export default function CommentList({comments, deleteComment}) {
    const [seeAllComments, setSeeAllCommnets] = useState(false)

    let commentsToDisplay = comments
    if (!seeAllComments) {
        commentsToDisplay = commentsToDisplay.slice(Math.max(commentsToDisplay.length - 3, 0))
    }

    return (
        <div className="comment-list-container">
            {/* Rendering if there are more than 3 comments, and changing text based on if previous is hidden or not */}
            {comments.length > 3 && <p onClick={() => setSeeAllCommnets(!seeAllComments)}>    
                {seeAllComments ? "Hide" : "See"} prvious comments
            </p>}
            <div className="comment-list">
                {
                    commentsToDisplay.map(comment => (
                        <Comment key={comment.id} comment={comment} deleteComment={deleteComment} />
                    ))
                }
            </div>
        </div>
    )
}

CommentList.propTypes = {
    comments: PropTypes.array,
    deleteComment: PropTypes.func,
}