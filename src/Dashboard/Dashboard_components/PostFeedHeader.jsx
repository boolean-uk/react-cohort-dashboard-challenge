import AddPostForm from "./PostListHeader_Components/AddPostForm"
import UserInitials from "../../Low-level_components/UserInitials"
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