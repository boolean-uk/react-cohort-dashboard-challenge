import { useState, useContext} from "react"
import "./../styles.css"
import { UserContext } from "../../../App"
import PropTypes from "prop-types"

function CreateComment({postId, setComments, comments}) {
  const {loggedInUser} = useContext(UserContext)
  const [comment, setComment] = useState({
      id: "",
      postId: postId,
      content: "",
      contactId: loggedInUser.id
  })
  const handleChange = (event) => {
      event.preventDefault()
      const {name, value} = event.target; 
      setComment({...comment, [name]: value})
  }

  const addComment = async (event) => {
      event.preventDefault()

      //Add to API
      try {
          const res = await fetch(`https://boolean-api-server.fly.dev/AxelHan/post/${postId}/comment`, {
              method: "POST",
              headers: { 'Content-Type': 'application/json'},
              body: JSON.stringify(comment)
          })

          if(res.ok) {
              console.log("success comment added")
              setComments([...comments, comment])
              setComment({...comment, content: ""})
          } else{
              console.error("Failed to add comment")
          }
      }
      catch (error){
          console.error('Error:', error)
      }

  }
  return (
    <div className="create-comment-container">
    <form onSubmit={addComment} className="create-comment-form">
        <input 
        className="create-comment-input"
        name="content" 
        id="content" 
        placeholder="Comment"
        value= {comment.content}
        onChange={handleChange}
        required></input>
        <button className="submitbtn" type="submit">Comment</button>
    </form>
    </div>
  )
}

CreateComment.propTypes = {

    setComments: PropTypes.func,
    comments: PropTypes.array,
    postId: PropTypes.number
  
  }
  

export default CreateComment