import { useState} from "react"
import "./../styles.css"

function CreateComment({postId, setComments, comments}) {

  const [comment, setComment] = useState({
      postId: postId,
      content: "",
      contactId: 1
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
    <form onSubmit={addComment}>
        <div>
            <textarea 
            className="create-comment-input" 
            name="content" 
            id="content" 
            placeholder="Comment"
            value= {comment.content}
            onChange={handleChange}
            cols="10" 
            rows="4"></textarea>
        </div>
        <button className="submitbtn" type="submit">Comment</button>
    </form>
    </div>
  )
}

export default CreateComment