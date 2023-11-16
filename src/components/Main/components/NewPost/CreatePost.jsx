import { useNavigate } from "react-router-dom"
import LoggedInProfileCircle from "../../../Shared/LoggedInProfileCircle"
import AddPostForm from "./AddPostForm"

function CreatePost({ posts, URL, loggedInUser, loggedInUserInitials, setShouldGetPosts }) {

    const navigate = useNavigate()

    return (
        <section className="create-post grid">
            <div onClick={() => navigate(`/profile/${loggedInUser.id}`)}>
                <LoggedInProfileCircle loggedInUserInitials={loggedInUserInitials} />
            </div>
            <AddPostForm posts={posts} URL={URL} loggedInUser={loggedInUser} setShouldGetPosts={setShouldGetPosts} />
        </section>
    )
}

export default CreatePost