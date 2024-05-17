import Comment from "../Comment"

export default function CommentList(props) {
    return (
        <div>{props.comments.map((comment) => {return <Comment comment={comment}/>})}</div>
    )
}