import UserName from "./UserName";


export default function Comment({comment, reloadContacts}) {
    return(
        <>
            <div className="comment">
                <UserName contactId={comment.contactId} reloadContacts={reloadContacts}/>
                <p>{comment.content}</p>
            </div>
        </>
    )
}