import { useContext, useEffect, useState } from "react";
import "../../../../../../../../../../../../assets/css/PostComment.css"
import InitialsProfileIcon from "../../../../../../../../../../icons/InitialsProfileIcon"
import { LoggedInContactContext } from "../../../../../../../../../../../../App"
import { CommentCrudContext } from "../..";

function PostComment({ postId }) {
    //Contexts
    const loggedInContactContext = useContext(LoggedInContactContext)
    const { loggedInContact } = loggedInContactContext

    const commentCrud = useContext(CommentCrudContext)
    const { addComment } = commentCrud

    // States
    const [initials, setInitials] = useState("")
    const [commentData, setCommentData] = useState("")

    useEffect(() => {
        const firstName = loggedInContact.firstName
        const lastName = loggedInContact.lastName
        setInitials(firstName.charAt(0) + lastName.charAt(0))
    }, [loggedInContact.firstName, loggedInContact.lastName])

    const handleSubmit = async () => {
        if (commentData === "") return;
        const dataToSend = {
            "postId": postId,
            "content": commentData,
            "contactId": loggedInContact.id
        }
        const res = await addComment(postId, dataToSend)
        setCommentData("")
        console.log(res)
    }

    return (
        <div className="PostComment-main">
            <InitialsProfileIcon color={loggedInContact.favouriteColour} initials={initials} />
            <input type="text" placeholder="Add a comment..." onChange={(e) => setCommentData(e.target.value)} />
            <input type="submit" value="Post" onClick={handleSubmit} />
        </div>
    )
}

export default PostComment;