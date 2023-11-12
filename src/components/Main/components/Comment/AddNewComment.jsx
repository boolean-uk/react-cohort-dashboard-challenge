import LoggedInProfileCircle from "../../../Shared/LoggedInProfileCircle"
import AddCommentForm from "./AddCommentForm"

function AddNewComment({ loggedInUserInitials }) {

    return (
        <>
            <LoggedInProfileCircle loggedInUserInitials={loggedInUserInitials} />
            <AddCommentForm />
        </>
    )
}

export default AddNewComment