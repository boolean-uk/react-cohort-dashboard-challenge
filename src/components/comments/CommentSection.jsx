import { useContext, useEffect, useState } from "react"
import Comments from './Comments';
import "../../styles/comments/CommentSection.css"
import CreateComment from "./CreateComment";
import { CommentContext } from "../../App";

export default function CommentSection({ post, showAllInitially }) {
    const { comments } = useContext(CommentContext)
    const postComments = comments[post.id] || []
    const orderedComments = postComments.sort((a, b) => a.id-b.id)
    const [showAll, setShowAll] = useState(showAllInitially)
    return (
        <div className="commentSectionContainer">
            {
                orderedComments.length > 3 && !showAll ?
                    <>
                        <p className="seePreviousCommentsButton" onClick={() => setShowAll(true)}>See previous comments</p>
                        <Comments comments={orderedComments.slice(Math.max(orderedComments.length - 3, 0))} />
                    </>
                    :
                    orderedComments.length > 0 ?
                        <Comments comments={orderedComments} />
                        :
                        <p style={{ margin: 5, color: "grey" }}>No comments on this post yet</p>
            }
            <CreateComment postId={post.id} comments={orderedComments} />
        </div>
    )
}