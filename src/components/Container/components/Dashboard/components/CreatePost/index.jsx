import { useContext, useEffect, useState } from "react";
import "../../../../../../assets/css/CreatePost.css"
import InitialsProfileIcon from "../../../../icons/InitialsProfileIcon"
import { PostCrudContext, LoggedInContactContext } from "../../../../../../App"

function CreatePost() {
    // Contexts
    const postCrud = useContext(PostCrudContext)
    const { addPost } = postCrud

    const loggedInContactContext = useContext(LoggedInContactContext)
    const { loggedInContact } = loggedInContactContext

    // States
    const [commentData, setCommentData] = useState("")
    const [initials, setInitials] = useState("")

    useEffect(() => {
        const firstName = loggedInContact.firstName
        const lastName = loggedInContact.lastName
        setInitials(firstName.charAt(0) + lastName.charAt(0))
    }, [loggedInContact.firstName, loggedInContact.lastName])

    // Functions
    const handleSubmit = async () => {
	    if (commentData === "") return;
	    const postData = {
		    "title": "No title.", // TODO: what should this be
		    "content": commentData,
		    "contactId": loggedInContact.id
	    }
	    console.log(await addPost(postData))
    }

	return (
		<div className="CreatePost-main">
		<div className="CreatePost-container">
		<InitialsProfileIcon color={loggedInContact.favouriteColour} initials={initials} />
		<input
		type="text"
		placeholder="What's on your mind?"
		value={commentData}
		onChange={(e) => setCommentData(e.target.value)}
		/>

		<input type="submit" value="Post" onClick={handleSubmit} />
		</div>
		</div>
	)
}

export default CreatePost;
