/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"

const COMMENT_TO_POST = {

    senddata: ''
}
function Comment(props) {
    const [commentForm, setCommentForm] = useState(COMMENT_TO_POST)
    const { user, comments, setComments } = props


    const postComment = () => {
        console.log(comments)
        console.log('.....')
        const options = {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({
                postId: user.id,  // Assuming user.id is the postId
                content: commentForm.senddata,
                contactId: user.contactId
            })
            
        }

        fetch(`https://boolean-api-server.fly.dev/Usamaibrahim33/post/${user.id}/comment`, options)
        .then((response) => response.json())
        .then((data) =>  {
            console.log(data)
        
            setComments(prevData => [data.content, ...prevData])
            setCommentForm(COMMENT_TO_POST)
        
        })

        .catch((error) => console.log('we encountered an error, the server is not responding!', error))
    }
 
    const handleComment = (event) => {
        event.preventDefault()
        console.log(commentForm.senddata)
        console.log(user)
        postComment()
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setCommentForm({...commentForm, [name]: value})

    }

    return(
        <form className="comment" onSubmit={handleComment} >
        <div className='circle commentcircle coms' >US</div>
        <input
         className='whatonmind' 
         type="text"
         name="senddata" 
         placeholder='Add a comment....'
         value={commentForm.senddata}
         onChange={(event) => handleChange(event)}
         />
        <input className='post' type="submit" value='comment' />
       </form>
    )
}

export default Comment