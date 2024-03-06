import { useState, useEffect } from 'react'
import AccountIcon from '@/Components/AccountIcon/AccountIcon'
import { baseUserUrl } from '@/Utils/apiUtils'
import "./PostReply.css"
import PropTypes from 'prop-types'

const PostReply = ({ reply }) => {
    const [user, setUser] = useState()

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
                    <span>{user?.firstName} {user?.lastName}</span>
                    <p>{reply.content}</p>
                </div>
            </div>}
        </div> 
    )
}

PostReply.propTypes = {
    reply: PropTypes.object,
}

export default PostReply