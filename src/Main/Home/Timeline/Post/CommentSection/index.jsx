import CommentField from './CommentField'
import Comment from './Comment'
import { useState, useEffect } from 'react'

function CommentSection({post}) {
    const [comments, setComments] = useState([])
    const [maxThree, setMaxThree] = useState(true)

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/nora-hansen/post/${post.id}/comment`)
            .then(response => response.json())
            .then(setComments)
    },[post.id])

    return(
        <>
            {comments.length > 3 && <>
                <input id={`see-previous-${post.id}`} className="see-previous-checkbox" type="checkbox" onChange={() => setMaxThree(!maxThree)}/>
                <label className="see-previous-label" htmlFor={`see-previous-${post.id}`}>{maxThree ? "See previous comments" : "Hide previous comments"}</label>
            </>
            }
            {comments.map((comment, index) => !maxThree || index >= comments.length-3 ? (
                <Comment key={index} comment={comment} post={post} comments={comments} setComments={setComments}/>
            ) : <div key={index}></div>)}
            <CommentField post={post} comments={comments} setComments={setComments}/>
        </>
    )
}

export default CommentSection