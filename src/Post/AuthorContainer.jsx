
import UserName from "../Low-level_components/UserName.jsx"
import UserInitials from "../Low-level_components/UserInitials.jsx"
import PostTitle from "./PostTitle.jsx"


export default function AuthorContainer({post, reloadContacts, reloadPostList}) {
    reloadPostList

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