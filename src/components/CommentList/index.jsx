export default function CommentList(props) {
    return (
        <div>{props.comments.map((comment) => {return <div><b>Comment:</b>{comment.content}</div>})}</div>
    )
}