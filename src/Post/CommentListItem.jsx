import { useContext, useEffect, useState } from "react"
import { getAuthor, updateComment } from "../Api"
import { useNavigate } from "react-router-dom"
import { CommentContext } from "../PostListItem"

let InitialAuthor = {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    jobTitle: "",
}

function CommentListItem({ comment, removeComment }) {
    const [author, setAuthor] = useState({ ...InitialAuthor })
    const [isEditing, setIsEditing] = useState(false)
    const { comments, setComments } = useContext(CommentContext)
    const navigate = useNavigate()
    useEffect(() => {
        getAuthor(comment.contactId)
            .then((response) => { setAuthor(response) })
    }, [comment])



    const editComment = (event) => {
        setIsEditing(true)
    }

    const saveComment = (event) => {
        updateComment(comment)
        setIsEditing(false)
    }

    const handleChange = (event) => {
        comment[event.target.name] = event.target.value
        setComments([...comments])
    }

    return (
        <div>
            <span className="initials postInitials" onClick={() => { navigate(`/profile/${comment.contactId}`) }}>{author.firstName[0]}{author.lastName[0]}</span>
            <div className="comment">
                <h1 onClick={() => { navigate(`/profile/${comment.contactId}`) }}>{author.firstName} {author.lastName}</h1>
                {!isEditing && <h2>{comment.content}</h2>}
                {isEditing && <textarea name="content"
                    type='text'
                    value={comment.content}
                    cols='50'
                    rows='4'
                    onChange={handleChange}></textarea>}
                <div className="commentButtons">
                    <h1 onClick={() => removeComment(comment)}>X</h1>
                    {!isEditing && <h1 onClick={editComment}>Edit</h1>}
                    {isEditing && <h1 onClick={saveComment}>Save</h1>}
                </div>


            </div>
        </div>

    )
}

export default CommentListItem