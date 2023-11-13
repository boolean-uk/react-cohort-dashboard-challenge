
import UserName from "./components/UserName"
import UserInitials from "./components/UserInitials"
import PostTitle from "./components/PostTitle.jsx"


export default function AuthorContainer({post, reloadContacts}) {
    return(
        <>
            <div>
                <UserInitials contactId={post.contactId} reloadContacts={reloadContacts}/>
                <UserName contactId={post.contactId} reloadContacts={reloadContacts}/>
                <PostTitle post={post}/>
            </div>
        </>
    )
}