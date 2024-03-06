import { useContext, useEffect, useState } from "react"
import { PostContext } from "../App"
import { useNavigate } from "react-router-dom"

export default function PostDelete(props)
{
    const {post} = props
    const {deletePost} = useContext(PostContext)
    const navigate = useNavigate()
    const [postDelete, setPostDelete] = useState({})

    // DELETE the post
    useEffect(() =>
    {
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
            if (postDelete.id !== undefined) navigate("/")
        }
    )
    }, [postDelete])


    const handleDelete = () =>
    {
        deletePost({post})
        setPostDelete(post)
    }

    return (
        <>
        <button onClick={handleDelete}>Delete</button>
        </>
    )
}