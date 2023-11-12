import LoggedInProfileCircle from "../../../Shared/LoggedInProfileCircle"
import AddCommentForm from "./AddCommentForm"

function AddNewComment({ post, loggedInUser, loggedInUserInitials, URL, setShowComments }) {

    return (
        <section className="add-new-comment-container grid">
            <LoggedInProfileCircle loggedInUserInitials={loggedInUserInitials} />
            <AddCommentForm post={post} loggedInUser={loggedInUser} URL={URL} setShowComments={setShowComments} />
        </section>
    )
}

export default AddNewComment