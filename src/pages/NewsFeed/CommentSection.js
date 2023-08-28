import CommentList from "./CommentList";
import CommentSectionAction from "./CommentSectionAction";
import { useContext } from "react";
import DataContext from "../../DataContext";

export default function CommentSection(props) {
    const {post} = props
    const {comments} = useContext(DataContext)
    const tmpArr = comments.filter(comment => comment.postId === post.id)
    return (
        <ul className="comment-section">
            <CommentList comments={tmpArr} />
            <CommentSectionAction postId={post.id}/>
        </ul>
    )
}