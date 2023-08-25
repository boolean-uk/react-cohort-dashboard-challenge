
import CommentList from "./CommentList";
import CommentSectionAction from "./CommentSectionAction";

export default function CommentSection() {
    return (
        <ul className="comment-section">
            <CommentList />
            <CommentSectionAction />
        </ul>
    )
}