
import Comment from "./Comment"

function CommentList({ comments }) {

    return (
        <div>
            <ul>
                {comments.map((comment, index) => (
                    <Comment 
                    key={index} 
                    comment={comment} />
                )).reverse()}
            </ul>
        </div>
    )
}

export default CommentList