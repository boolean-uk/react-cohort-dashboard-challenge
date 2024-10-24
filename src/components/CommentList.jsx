import { useState, useEffect } from "react"
import CommentItem from "./CommentItem"

function CommentList({id}){
    const [comments, setComments] = useState([]);
    const [showAllComments, setShowAllComments] = useState(false);

    useEffect(() => {
        async function getComments() {
            const response = await fetch(
                `https://boolean-uk-api-server.fly.dev/FredrikEH/post/${id}/comment`
            );
            const data = await response.json();
            setComments(data);
        }
        getComments();
    }, [id]);

    function showAllCommentsFunction(){
        setShowAllComments(!showAllComments)
        console.log(showAllComments)
    }

    return(
        <div> 
            {   
                comments.length > 0 ? (
                    showAllComments ? (
                        <div>
                            <ul>
                                {comments && comments.map((comment, index) => (
                                    <CommentItem key={index} comment={comment}/>
                                ))}
                            </ul>
                            {comments.length > 3 && (
                                <button onClick={showAllCommentsFunction}>Hide previous comments</button>
                            )}
                            <p></p>
                        </div>
                    ) : (
                        <div>
                            <ul>
                                {comments && comments.slice(0, 3).map((comment, index) => (
                                    <CommentItem key={index} comment={comment}/>
                                ))}
                            </ul>
                            {comments.length > 3 && (
                                    <button onClick={showAllCommentsFunction}>See previous comments</button>
                            )}
                            <p></p>
                        </div>
                    )
                    
                ) : (
                    <p>No comments!</p>
                )
            }
        </div>
    )
}

export default CommentList