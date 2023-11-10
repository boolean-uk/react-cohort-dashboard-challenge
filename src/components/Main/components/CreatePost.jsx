import LoggedInProfileCircle from "../../Shared/LoggedInProfileCircle"
import AddPostForm from "./AddPostForm"

function CreatePost({ loggedInUserInitials }) {

    return (
        <section className="create-post grid">
            <LoggedInProfileCircle loggedInUserInitials={loggedInUserInitials} />
            <AddPostForm />
        </section>
    )
}

export default CreatePost