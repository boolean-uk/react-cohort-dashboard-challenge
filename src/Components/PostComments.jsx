import { useEffect, useState } from "react"

export default function PostComments(props)
{
    const {initials, addComment, postId, color} = props

    const INITIAL_COMMENT =
    {
        content: ""
    }

    const [comment, setComment] = useState(INITIAL_COMMENT)
    const [createComment, setCreateComment] = useState(INITIAL_COMMENT)


    // POST a comment
    useEffect(() =>
    {
        if (!createComment.postId)
            return
        
        const postOptions =
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(createComment)
        }
        
        fetch(`https://boolean-api-server.fly.dev/klaand01/post/${postId}/comment`, postOptions)
        .then((response) => response.json())
        .then(() => addComment({comment}))
        
    }, [createComment])


    // Helper functions
    const handleInput = (event) =>
    {
        setComment({content: event.target.value})
    }

    const handleClick = () =>
    {
        if (comment.content !== "")
        {   
            setCreateComment({...comment, contactId: 1, postId: postId})
            setComment(INITIAL_COMMENT)
        }
    }

    return (
        <>
        <p style={{backgroundColor: color}} className="circle">{initials}</p>
        <input type="text" placeholder="Add a comment..." onChange={handleInput} value={comment.content}></input>
        <button onClick={handleClick}>Comment</button>
        </>
    )
}