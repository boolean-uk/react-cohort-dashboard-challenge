export default function CommentLi({ comment }) {
    return (
        <li className="comment-li">
            <div className="profile-image">
                <p>{}</p>
            </div>

            <div className="comment-container">
                <p>Name</p>
                <p>{comment.content}</p>
            </div>
        </li>
    )
}