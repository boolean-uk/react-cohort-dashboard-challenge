import AddPostForm from "./components/components/components/components/AddPostForm"
import UserInitials from  "./components/components/components/components/components/UserInitials"

export default function PostFeedHeader({setPostList, reloadPostList, setReloadPostList}) {
    return(
        <>
            <header>
                <UserInitials />
                <AddPostForm 
                    setPostList={setPostList}
                    reloadPostList={reloadPostList}
                    setReloadPostList={setReloadPostList}/>
            </header>
        </>
    )
}