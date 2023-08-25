import Comment from "./Comment";
import CommentSectionAction from "./CommentSectionAction";

export default function CommentSection() {
    return (
        <ul className="comment-section">
            <li className="see-comments">
                See previous comments
            </li>
            <ul className="comment-list">
                <Comment />
                <Comment />
                <Comment />
            </ul>
            <li>
                <CommentSectionAction />
            </li>
        </ul>
    )
}