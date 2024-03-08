import { useContext, useState } from "react"
import Avatar from "react-avatar"
import { AppContext } from "../../../../App"

const initialComment = {
    postId: 0,
    content: "",
    contactId: 0
}

function CreateComment({comments, setComments}) {

    const [comment, setComment] = useState(initialComment)
    const {loggedInUser} = useContext(AppContext)

    function handleClick(event) {
        event.preventDefault()
        setComments([...comments, comment])
        setComment(initialComment)
    }


    return(
        <div>
            <Avatar className="post-avatar" round={true} name={`${loggedInUser.firstName} ${loggedInUser.lastName}`}/>
                <input className="comment-field" type="text"
                    id="content"
                    name="content"
                    onChange={(e) => setComment({...comment, content: e.target.value,
                        contactId: loggedInUser.id})}
                    value={comment.content}
                    placeholder="Comment..."
                > 
                </input> 
                <button className="comment-button" onClick={handleClick}>post</button>
        </div>
    )
}

export default CreateComment