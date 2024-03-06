
import Comment from "./Comment";
export default function Comments({ comments }) {
    return (
        <div className="commentsContainer">
            {
                comments.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                ))
            }
        </div>
    )
}