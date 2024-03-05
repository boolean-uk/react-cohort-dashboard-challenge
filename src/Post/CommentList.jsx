import CommentListItem from "./CommentListItem"

function CommentList({ comments }) {

    return (
        <ul>
            {comments.map((comment) => { return (<CommentListItem comment={comment} />) })}
        </ul>
    )
}

export default CommentList