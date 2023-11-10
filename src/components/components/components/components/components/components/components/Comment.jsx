import UserName from "./UserName";


export default function Comment({comment}) {
    return(
        <>
            <div>
                <UserName contactId={comment.contactId}/>
                <p>{comment.content}</p>
            </div>
        </>
    )
}