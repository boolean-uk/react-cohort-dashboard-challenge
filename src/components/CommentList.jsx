import { useContext, useState } from "react"
import CommentItem from "./CommentItem"
import { CommentContext } from "./PostItem"
import "../styling/CommentList.css"

function CommentList(){
    const { comments } = useContext(CommentContext)
    const [showMore, setShowMore] = useState(false)

    if (showMore || (comments.length <= 3)){
        return(
            <div className="comments">
                {(comments.length > 3) && <p className="previous_comments" onClick={() => {setShowMore(false)}}>Hide previous comments</p>}
                    {comments.map((comment, i) => 
                        <CommentItem comment={comment} key={i}/>
                    )}
            </div>
        )
    }

    return(
        <div className="comments">
            <p className="previous_comments" onClick={() => {setShowMore(true)}}>See previous comments</p>
            {comments.slice(comments.length - 3, comments.length).map((comment, i) => 
                <CommentItem comment={comment} key={i}/>
            )}
        </div>
    )
}

export default CommentList