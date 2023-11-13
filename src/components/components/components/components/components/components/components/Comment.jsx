import UserName from "./UserName";


export default function Comment({comment}) {
    return(
        <>
            <div className="comment">
                <UserName contactId={comment.contactId}/>
                <p>{comment.content}</p>
            </div>
        </>
    )
}