import "../../styles/comments/CommentContent.css";
export default function CommentContent({ comment, commentUser }) {
    return (
        <div className="commentContent">
            <p className="commentUserName">{commentUser.firstName} {commentUser.lastName}</p>
            <p className="commentText">{comment.content}</p>
        </div>
    )
}