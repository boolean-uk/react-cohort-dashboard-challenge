import LoggedInProfileCircle from "../../Shared/LoggedInProfileCircle"
import AddPostForm from "./AddPostForm"

function CreatePost({ posts, URL, loggedInUser, loggedInUserInitials, setShouldGetPosts }) {

    return (
        <section className="create-post grid">
            <LoggedInProfileCircle loggedInUserInitials={loggedInUserInitials} />
            <AddPostForm posts={posts} URL={URL} loggedInUser={loggedInUser} setShouldGetPosts={setShouldGetPosts} />
        </section>
    )
}

export default CreatePost