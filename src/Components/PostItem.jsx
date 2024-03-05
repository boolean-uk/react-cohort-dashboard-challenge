import { useEffect, useState } from "react";

export default function PostItem(props)
{
    const { post } = props;
    const [comments, setComments] = useState([])

    useEffect(() =>
    {
        fetch(`https://boolean-api-server.fly.dev/klaand01/post/${post.id}/comment`)
        .then((response) => response.json())
        .then((data) => 
        {
            //console.log("COMMENTS", data)
            setComments(data)
        })
    }, [post.id])

    return (
        <>
        <p>{post.title}</p>
        <p>{post.content}</p>
        <ul>
            {comments.map((comment, index) => (
                <li key={index}>{comment.content}</li>
            ))}
        </ul>
        </>
    )
}