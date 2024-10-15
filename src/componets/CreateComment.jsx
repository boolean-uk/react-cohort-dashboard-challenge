import { useContext, useState } from "react"
import { LoginContext } from "../App"


function CreateComment(props) {
    const { user } = useContext(LoginContext)
    const { postId } = props
    const { fetchComments } = props
    const commentBody = {
        content: "",
        contactId: user.id,
        postId: postId
      }

    const [submition, setComment] = useState(commentBody)

    const postComment = async () => {
        await fetch("https://boolean-uk-api-server.fly.dev/danielmjosroli/post/"+postId.toString()+"/comment",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'accept': 'application/json'},
                body: JSON.stringify(submition),
            },
        ).then(Response => {
            if(Response.ok){
              fetchComments()
              return Response.json()
            }
            throw Response
        
            }).catch(error => {
              console.error("Error fetching data: ", error)
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        postComment()
        setComment(commentBody)
    }   

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input
            placeholder="Add a comment..."
            type="text"
            id="commentContent"
            name="commentContent"
            onChange={e => setComment({...submition, content: e.target.value})}
            value={submition.content}
            />
            <button type="submit">Comment</button>
        </form>
        </>
    )
}

export default CreateComment