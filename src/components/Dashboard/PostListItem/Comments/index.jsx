import { useContext, useEffect, useState } from "react"
import Avatar from "react-avatar"
import { AppContext } from "../../../../App"
import CreateComment from "./CreateComment"
import CommentListItem from "./CommentListItem"
import './style.css'

function RenderComments({postId}) {
    const {loggedInUser} = useContext(AppContext)
    const [comments, setComments] = useState([])


    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/ThomasKva/post/${postId}/comment`)
        .then(response => response.json())
        .then((data) => setComments(data))
        .then(console.log(comments))
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
                    {comments.map((comment) => (
                        <div key={comment.id} className="comment">
                            <CommentListItem comment={comment}/>
                        </div>
                    ))}
                </div>
            )}
            <div>
                <CreateComment comments={comments} setComments={setComments}/>
            </div>
        </>
    )
}

export default RenderComments