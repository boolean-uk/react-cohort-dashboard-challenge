import { useState } from "react"
import CommentListItem from "./CommentListItem"

function CommentList({ comments }) {

    const [showAll, setShowAll] = useState(false)
    let ShownComments = comments
    if (!showAll) {
        ShownComments = comments.slice(-3)
    }
    return (
        <ul>
            {(comments.length > 3 && !showAll) && <h1 className="showAllComments" onClick={() => { setShowAll(true) }}>See previous comments</h1>}
            {ShownComments.map((comment) => { return (<CommentListItem comment={comment} />) })}
        </ul>
    )
}

export default CommentList