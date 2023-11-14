import LoggedInProfileCircle from "../../../Shared/LoggedInProfileCircle"
import AddCommentForm from "./AddCommentForm"

function AddNewComment({ post, loggedInUser, loggedInUserInitials, URL, setAllComments }) {

    return (
        <section className="add-new-comment-container grid">
            <LoggedInProfileCircle loggedInUserInitials={loggedInUserInitials} />
            <AddCommentForm post={post} loggedInUser={loggedInUser} URL={URL} setAllComments={setAllComments} />
        </section>
    )
}

export default AddNewComment