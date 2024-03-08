import { useContext, useState } from "react"
import Avatar from "react-avatar"
import { AppContext } from "../../../../App"

const initialComment = {
    content: "",
    contactId: 0
}

function CreateComment({ postId,comments, setComments}) {

    const [comment, setComment] = useState(initialComment)
    const {loggedInUser} = useContext(AppContext)

    function handleClick(event) {
        event.preventDefault();
      
        fetch(`https://boolean-api-server.fly.dev/ThomasKva/post/${postId}/comment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({...comment, postId: postId}), 
        })
          .then((response) => response.json())
          .then((createComment) => {
            setComments([...comments, createComment]);
            setComment(initialComment); 
          })
          .catch((error) => console.error("Could not create new comment...", error));
      }


    return(
        <div>
            <Avatar className="post-avatar" round={true} name={`${loggedInUser.firstName} ${loggedInUser.lastName}`}
              textSizeRatio={2}/>
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