import { useContext, useEffect, useState } from "react"
import { PostContext } from "../App"
import { useNavigate } from "react-router-dom"

export default function PostDelete(props)
{
    const {post} = props
    const {deletePost} = useContext(PostContext)
    const [postDelete, setPostDelete] = useState({})
    const navigate = useNavigate()

    // DELETE the post
    useEffect(() =>
    {
        if (!postDelete.title)
            return

        const deleteOption =
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postDelete)
        }

        fetch(`https://boolean-api-server.fly.dev/klaand01/post/${postDelete.id}`, deleteOption)
        .then((response) => response.json())
        .then(() => {
            deletePost({postDelete})
            navigate("/")
        }
    )
    }, [postDelete])

    return (
        <>
        <button onClick={() => setPostDelete(post)}>Delete</button>
        </>
    )
}