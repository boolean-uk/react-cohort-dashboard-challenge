import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../../../App"
import CreateComment from "./CreateComment"
import CommentListItem from "./CommentListItem"
import './style.css'

function RenderComments({postId, comments, setComments}) {
    const {loggedInUser} = useContext(AppContext)
    
    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/ThomasKva/post/${postId}/comment`)
        .then(response => response.json())
        .then((data) => setComments(data))
        .catch(error => console.error("No comments found...", error))
    }, [postId])

    if(!loggedInUser) return
    return(
        <>
            {comments.length > 0 && (
                <div className="comment-container">
                    <div className="devider">
                    --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    </div>
                    {comments.map((comment, index) => (
                        <div key={index} className="comment">
                            <CommentListItem comment={comment}/>
                        </div>
                    ))}
                </div>
            )}
            <div>
                <CreateComment postId={postId} 
                    comments={comments} setComments={setComments}/>
            </div>
        </>
    )
}

export default RenderComments