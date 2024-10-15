import { UserContext } from "../App";
import "../styling/CommentInput.css"
import ColouredCircle from "./ColouredCircle"
import { useContext, useState } from "react"
import { CommentContext } from "./PostItem";
/* eslint react/prop-types: 0 */
function CommentInput( {post} ){
    const { userLoggedIn } = useContext(UserContext)
    const { updateComments } = useContext(CommentContext)

    const url = "https://boolean-uk-api-server.fly.dev/PandersPanda/post/" + post.id + "/comment";

    const initalComment = {
        postId: 0,
        content: "",
        contactId: userLoggedIn.id
    }

    const [comment, setComment] = useState(initalComment)

    const onChange = (event) => {
        setComment({...comment, content: event.target.value, postId: post.id})
    }

    const PostComment = () => {
        setComment[{...comment, postId: post.id}]
        console.log(url)
        console.log(comment)
        try{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(comment)
            };
            fetch(url, requestOptions)
                .then(response => response.json())
                .then(updateComments())
        }
        catch(e){
            console.error(e)    
        }        
    }


    return (
        <div className="comment_input">
            <ColouredCircle firstName={userLoggedIn.firstName} lastName={userLoggedIn.lastName} color={userLoggedIn.favouriteColour}/>
            <input type="text" placeholder="Add a comment..." onChange={onChange}/>
            <button onClick={PostComment} className="comment_button">Comment</button>
        </div>
    )
}

export default CommentInput