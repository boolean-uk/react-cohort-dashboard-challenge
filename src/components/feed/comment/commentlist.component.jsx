import React, { useState } from 'react'
import CommentitemComponent from './commentitem.component'
import CommentformComponent from './commentform.component'

const CommentlistComponent = (props) => {

    const [showAllComments, setShowAllComments] = useState(false)

    const { comments } = props

    return (
        <>
            {!showAllComments && comments.length > 3 &&
            <>
                <a className="commentitem-showprevious" onClick={()=>setShowAllComments(true)}>Show previous</a>
            </>}
            {comments
                .slice(showAllComments ? 0 : -3)
                .map((comment) => (
                <CommentitemComponent comment={comment} />
            ))}

        </>
    )
}

export default CommentlistComponent
