
import UserName from "./components/UserName"
import UserInitials from "./components/UserInitials"
import PostTitle from "./components/PostTitle.jsx"


export default function AuthorContainer({post}) {
    return(
        <>
            <div>
                <UserInitials />
                <UserName />
                <PostTitle post={post}/>
            </div>
        </>
    )
}