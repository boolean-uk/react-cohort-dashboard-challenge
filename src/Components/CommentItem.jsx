import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthorContext } from "../App";

export default function CommentItem(props)
{
    const {id} = useParams()
    const [editText, setEditText] = useState("Edit")
    const { deleteComment, editComment, comment } = props;
    const [commentDelete, setCommentDelete] = useState({})
    const [commentUpdate, setCommentUpdate] = useState({})
    const { authors } = useContext(AuthorContext)
    const navigate = useNavigate()

    // PUT an updated comment
    useEffect(() =>
    {
        if (!commentUpdate.content)
            return

        const putOptions =
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentUpdate)
        }
        
        fetch(`https://boolean-api-server.fly.dev/klaand01/post/${id}/comment/${commentUpdate.id}`, putOptions)
        .then((response) => response.json())
        .then(() => editComment({commentUpdate}))
    }, [commentUpdate])

    // DELETE the comment
    useEffect(() =>
    {
        if (!commentDelete.content)
            return

        const deleteOption =
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentDelete)
        }

        fetch(`https://boolean-api-server.fly.dev/klaand01/post/${id}/comment/${commentDelete.id}`, deleteOption)
        .then((response) => response.json())
        .then(() => deleteComment({commentDelete})
    )
    }, [commentDelete])

    if (!authors[0])
        return

    const author = authors[comment.contactId - 1]

    const handleDelete = () =>
    {
        setCommentDelete(comment)
    }

    const handleEdit = () =>
    {
        if (editText === "Save")
        {
            setCommentUpdate(comment)
            setEditText("Edit")
        }
        else
            setEditText("Save")
    }

    const handleInput = (event) =>
    {
        comment.content = event.target.value
    }

    return (
        <>
        <h4
            style={{backgroundColor: author.favouriteColour}}
            className="circle" onClick={() => navigate(`/user/${author.id}`)}>
            {author.firstName.charAt(0)}{author.lastName.charAt(0)}
        </h4>
        {editText === "Edit" && comment.content}
        {editText === "Save" && <input type="text" placeholder={comment.content} onChange={handleInput}></input>}
        <button onClick={handleEdit} className="commentButton">{editText}</button>
        <button onClick={handleDelete} className="commentButton">Delete</button>
        </>
    )
}