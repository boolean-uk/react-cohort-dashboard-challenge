import { useContext, useEffect, useState } from "react"
import { AppContext } from "../App"
import { Link, useNavigate } from "react-router-dom"
import TrashCan from '../assets/trashcan.png'
import Edit from '../assets/pen.png'

function Comment({ comment }) {
    const { contacts } = useContext(AppContext)
    const [contact, setContactId] = useState(null)
    const [edit, setEdit] = useState(false)
    const [commentEdit, setCommentEdit] = useState(comment)
    const navigate = useNavigate()

    // Set the contact to the contact that makes the comment
    useEffect(() => {
        setContactId(contacts.find(contact => contact.id === comment.contactId))
        
        setEdit(false)
    }, [])

    if(!contact) {
        return <div>Loading...</div>
    }

    const handleDeleteComment = async () => {
        try {
            const response = await fetch(`https://boolean-uk-api-server.fly.dev/Yumikitsu/post/${comment.postId}/comment/${comment.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (response.ok) {
                window.location.reload()
            } else {
                console.error("Failed to delete a Post")
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }

    const handleEditComment = async () => {
        try {
            const response = await fetch(`https://boolean-uk-api-server.fly.dev/Yumikitsu/post/${comment.postId}/comment/${comment.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(commentEdit)
            })

            if (response.ok) {
                window.location.reload()
            } else {
                console.error("Failed to delete a Post")
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }

    // Handle a freetext change event
    const handleTextChange = (event) => {
        setCommentEdit({...commentEdit, [event.target.name]:event.target.value})
    }

    const handleButtonClick = (id) => {
        navigate(`/profile/${id}`)
    }

    const handleEdit = () => {
        if(edit) {
            handleEditComment()
        } else
        {
            setEdit(true)
        }
    }

    return (
        <>
        <div className="Comment">
            <div className="CommenterIcon">
                <button className="UserIcon-Home" 
                style={{ backgroundColor: contact.favouriteColour }}
                onClick={() => handleButtonClick(contact.id)}>{contact.firstName ? contact.firstName[0] : ''}{contact.firstName ? contact.lastName[0] : ''}</button>
            </div>
            <div className="CommentBody">
                <div className="CommentText">
                    <Link className="LinkNoUnderline" to={`/profile/${contact.id}`}>
                        <h4>{contact.firstName} {contact.lastName}</h4>
                    </Link>
                    {!edit ? (
                        <>
                            <p>{comment.content}</p>
                        </>
                        ) : (
                        <>
                            <textarea name="content" 
                            value={commentEdit.content} 
                            onChange={handleTextChange}>
                            </textarea>
                        </>
                    )}
                </div>
                <div className="CommentEditAndDelete">
                    <img className="TrashOrEditIconComment"
                    src={Edit}
                    onClick={handleEdit}/>
                    <img className="TrashOrEditIconComment" 
                    src={TrashCan} 
                    onClick={handleDeleteComment}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Comment