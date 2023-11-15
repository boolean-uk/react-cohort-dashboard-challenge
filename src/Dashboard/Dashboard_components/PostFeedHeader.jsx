import PostForm from "./PostListHeader_Components/PostForm"
import UserInitials from "../../Low-level_components/UserInitials"
export default function PostFeedHeader({setPostList, reloadPostList, setReloadPostList, mockLoggedInUserId, reloadContacts, reloadComments, setReloadComments}) {


    return(
        <>
            <header className="post-feed-header">
                <div className="form-container post-list-element">
                <UserInitials reloadContacts={reloadContacts} contactId={mockLoggedInUserId}/>
                <PostForm 
                    setReloadComments={setReloadComments}
                    reloadComments={reloadComments}
                    reloadContacts={reloadContacts}
                    setPostList={setPostList}
                    reloadPostList={reloadPostList}
                    setReloadPostList={setReloadPostList}/>
                </div>
            </header>
        </>
    )
}