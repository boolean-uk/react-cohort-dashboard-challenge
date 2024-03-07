import { useEffect, useState } from "react"

export default function PostComments(props)
{
    const {initials, addComment, postId} = props

    const INITIAL_COMMENT =
    {
        content: "",
        postId: undefined,
        contactId: undefined
    }

    const [comment, setComment] = useState(INITIAL_COMMENT)
    const [createComment, setCreateComment] = useState(INITIAL_COMMENT)


    // POST a comment
    useEffect(() =>
    {
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
        setComment({content: event.target.value, contactId: 1, postId: postId})
    }

    const handleClick = () =>
    {
        if (comment.content !== "")
        {   
            setCreateComment(comment)
            setComment(INITIAL_COMMENT)
        }
    }

    return (
        <>
        {initials}
        <input type="text" placeholder="Add a comment..." onChange={handleInput} value={comment.content}></input>
        <button onClick={handleClick}>Comment</button>
        </>
    )
}