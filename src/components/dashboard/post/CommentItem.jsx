import ContactCircle from "../../ContactCircle"

export default function CommentItem({ comment, contact }) {

    return (
        <>
            <ContactCircle contact={contact} showName={true} ></ContactCircle>
            <p className="comment-content">{comment.content}</p>
        </>
    )
}