import { useState } from "react"
import { useContext } from "react" 
import { userContext } from "../../App"
import Profile_Icon from "../../header/components/profile_icon"

export default function NewComment({comments, setComments}){

    

    const user=useContext(userContext).user
    const [newComment, setNewComment]=useState({
        user: user,
        message: ''
    })
    

    const updateComments= (event, newComment) => {
        event.preventDefault()
        console.log(newComment)
        setComments([...comments, newComment])

    }
    

    return (
        <div className="commenter">
            <form className="comment_text">
                <Profile_Icon user={user}/>
          
                <label className="comment_input">
                    
                    
                    <input
                    type="text"
                    name="newComment"
                    value={newComment.message}
                    onChange={(e) => setNewComment({ ...newComment, message:e.target.value })}
                    />
                    
                </label>

                
                <input className="comment__submit" type="submit" value="Comment" onClick={(event) => updateComments(event, newComment)}/>
            </form>

        </div>
        
        
    )
}