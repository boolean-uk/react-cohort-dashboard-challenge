import { useContext, useState } from "react"
import { AppDataContext } from "../../App"
import ProfilePicture from "../reusable/ProfilePicture"

function MakePostComment(props) {
  const [commentContent, setCommentContent] = useState("")
  const context = useContext(AppDataContext)

  const handleOnClick = (event) => {
    event.preventDefault()
    const comment = {
      postId: props.postId,
      contactId: context.currentUser.id,
      content: commentContent
    }

    postRequest(comment)
    props.setComments([...props.comments, comment])
  }

  const postRequest = (comment) => {
    fetch(`https://boolean-api-server.fly.dev/RobinKaastrup/post/${props.postId}/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <div>
      <form>
        <input className="comment-content-field" type="text" placeholder="Add a comment..." value={commentContent} onChange={(e) => setCommentContent(e.target.value)}/>
        <button type="submit" onClick={(e) => handleOnClick(e)}>Submit</button>
      </form>
    </div>
  )
}

export default MakePostComment