import { useNavigate } from "react-router-dom"
import LoggedInProfileCircle from "../../../Shared/LoggedInProfileCircle"
import AddCommentForm from "./AddCommentForm"

function AddNewComment({ post, loggedInUser, loggedInUserInitials, URL, setAllComments }) {

    const navigate = useNavigate()

    return (
        <section className="add-new-comment-container grid">
            <div onClick={() => navigate(`/profile/${loggedInUser.id}`)}>
                <LoggedInProfileCircle loggedInUserInitials={loggedInUserInitials} />
            </div>
            <AddCommentForm post={post} loggedInUser={loggedInUser} URL={URL} setAllComments={setAllComments} />
        </section>
    )
}

export default AddNewComment