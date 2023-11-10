import AddPostForm from "./components/components/components/components/AddPostForm"
import UserInitials from  "./components/components/components/components/components/UserInitials"

export default function PostFeedHeader() {
    return(
        <>
            <header>
                <UserInitials />
                <AddPostForm />
            </header>
        </>
    )
}