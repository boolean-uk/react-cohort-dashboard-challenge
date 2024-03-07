import { useState, useEffect, useContext } from 'react'
import AccountIcon from '@/Components/AccountIcon/AccountIcon'
import { basePostUrl, baseUserUrl } from '@/Utils/apiUtils'
import "./PostReplyItem.css"
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { ReplyContext } from "@/Utils/contexts"

const PostReplyItem = ({ reply }) => {
    const [user, setUser] = useState()
    const navigate = useNavigate()
    const { refetchReplies } = useContext(ReplyContext)
    const [editField, setEditField] = useState(false)
    const [editedContent, setEditedContent] = useState(reply.content)

    const fetchUserInformation = async (userID) => {
        await fetch(`${baseUserUrl}/${userID}`)
            .then((res) => res.json())
            .then((res) => setUser({...res}))
    }

    const handleDelete = async () => {
        const request = {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            }
        }
        await fetch(`${basePostUrl}/${reply.postId}/comment/${reply.id}`, request)
        await refetchReplies(reply.postId)
    }

    const cancelEditing = () => {
        setEditedContent(reply.content)
        setEditField(false)
    }

    const handleFinishEditing = async () => {
        const updatedReply = {...reply, "content": editedContent}

        const request = {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updatedReply)
        }

        await fetch(`${basePostUrl}/${reply.postId}/comment/${reply.id}`, request)
            .then((res) => res.json())
            .then((res) => reply = res)

        setEditField(false)
        setEditedContent(reply.content)
        await (refetchReplies(reply.postId))
    }
    
    useEffect(() => {
        fetchUserInformation(reply.contactId)
    }, [reply])


    return (
        <div className="post-reply-item">
            {user && 
            <div className='post-reply-item-container'>
                <AccountIcon user={user}/>
                <div className="post-reply-content-container">
                    <span onClick={() => navigate(`/profile/${user.id}`)}>
                        {user?.firstName} {user?.lastName}
                    </span>
                    {!editField && <p>{reply.content}</p>}
                    {editField && <textarea 
                        className="text-like-field"
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                    />}
                    <div className='modify-post-container'> 
                        {editField && 
                            <>
                            <span onClick={() => handleFinishEditing()}>Confirm</span> 
                            <span onClick={() => cancelEditing()}>Cancel</span> 
                            </>
                        }
                        {!editField && 
                            <>
                            <span onClick={() => setEditField(true)}>Edit</span> 
                            <span onClick={() => handleDelete()}>Delete</span> 
                            </>
                        }
                    </div>
                </div>
            </div>}
        </div> 
    )
}

PostReplyItem.propTypes = {
    reply: PropTypes.object,
}

export default PostReplyItem