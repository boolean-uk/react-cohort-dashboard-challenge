import { useContext, useState, useEffect } from 'react'
import { userContext } from '@/Utils/contexts.js'
import { ReplyContext } from "@/Utils/contexts.js"
import { basePostUrl } from '@/Utils/apiUtils'
import AccountIcon from "@/Components/AccountIcon/AccountIcon"
import "./ReplyToPost.css"
import PropTypes from 'prop-types'

const ReplyToPost = ({postID}) => {
    const [data, setData] = useState({})
    const { LoggedInUser } = useContext(userContext)
    const { refetchReplies } = useContext(ReplyContext)

    useEffect(() => {
        setData({"commentText": localStorage.getItem(`uncommited_comment_${postID}`) || ""})
    }, [])

    const handleChange = (e) => {
        localStorage.setItem(`uncommited_comment_${postID}`, e.target.value)
        setData({...data, [e.target.id]: e.target.value})
    }

    const submitPostComment = async (e) => {
        e.preventDefault()
        const commentData = {
            postId: postID,
            contactId: LoggedInUser.id,
            content: data["commentText"]
        }

        const request = {
            method: "POST", 
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(commentData)
        }

        await fetch(`${basePostUrl}/${postID}/comment`, request)
        await refetchReplies(postID)
        setData({...data, "commentText": ""})
        localStorage.removeItem(`uncommited_comment_${postID}`)
        
    }

    return (
        <div className='reply-container'>
            <AccountIcon user={LoggedInUser}/>
            <div className='reply-container-item'>
                <input 
                    type="text"
                    className='reply-container-item-content'
                    placeholder='Add a comment...'
                    id="commentText"
                    value={data["commentText"]}
                    onChange={(e) => handleChange(e)}
                >
                </input>
                <button
                    onClick={(e) => submitPostComment(e)}
                >
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/sent-icon.png">
                    </img>
                </button>
            </div>
        </div>
    )
}

ReplyToPost.propTypes = {
    postID: PropTypes.number,
}

export default ReplyToPost