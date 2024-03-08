import { useState } from "react"
import Comment from "./components/Comment"

import "./styles.css"

export default function CommentList({comments}) {
    const [seeAllComments, setSeeAllCommnets] = useState(false)

    let commentsToDisplay = comments
    if (!seeAllComments) {
        commentsToDisplay = commentsToDisplay.slice(Math.max(commentsToDisplay.length - 3, 1))
    }

    return (
        <div className="comment-list-container">
            <p onClick={() => setSeeAllCommnets(!seeAllComments)}>    
                {seeAllComments ? "Hide" : "See"} prvious comments
            </p>
            <div className="comment-list">
                {
                    commentsToDisplay.map(comment => (
                        <Comment key={comment.id} comment={comment} />
                    ))
                }
            </div>
        </div>
    )
}