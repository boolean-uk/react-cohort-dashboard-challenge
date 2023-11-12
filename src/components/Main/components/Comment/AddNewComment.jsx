import LoggedInProfileCircle from "../../../Shared/LoggedInProfileCircle"
import AddCommentForm from "./AddCommentForm"

function AddNewComment({ loggedInUserInitials }) {

    return (
        <section className="add-new-comment-container grid">
            <LoggedInProfileCircle loggedInUserInitials={loggedInUserInitials} />
            <AddCommentForm />
        </section>
    )
}

export default AddNewComment