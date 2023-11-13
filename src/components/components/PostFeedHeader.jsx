import AddPostForm from "./components/components/components/components/AddPostForm"
import UserInitials from  "./components/components/components/components/components/UserInitials"

export default function PostFeedHeader({setPostList, reloadPostList, setReloadPostList, mockLoggedInUserId, reloadContacts}) {
    return(
        <>
            <header className="post-feed-header">
                <div className="form-container post-list-element">
                <UserInitials reloadContacts={reloadContacts} contactId={mockLoggedInUserId}/>
                <AddPostForm 
                    reloadContacts={reloadContacts}
                    setPostList={setPostList}
                    reloadPostList={reloadPostList}
                    setReloadPostList={setReloadPostList}/>
                </div>
            </header>
        </>
    )
}