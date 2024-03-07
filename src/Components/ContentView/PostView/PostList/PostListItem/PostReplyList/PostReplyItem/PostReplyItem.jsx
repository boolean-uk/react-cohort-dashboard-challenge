import { useState, useEffect } from 'react'
import AccountIcon from '@/Components/AccountIcon/AccountIcon'
import { baseUserUrl } from '@/Utils/apiUtils'
import "./PostReplyItem.css"
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const PostReplyItem = ({ reply }) => {
    const [user, setUser] = useState()
    const navigate = useNavigate()

    const fetchUserInformation = async (userID) => {
        await fetch(`${baseUserUrl}/${userID}`)
            .then((res) => res.json())
            .then((res) => setUser({...res}))
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
                    <p>{reply.content}</p>
                </div>
            </div>}
        </div> 
    )
}

PostReplyItem.propTypes = {
    reply: PropTypes.object,
}

export default PostReplyItem