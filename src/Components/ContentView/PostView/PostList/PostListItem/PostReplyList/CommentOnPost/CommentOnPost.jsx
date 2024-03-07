import { useContext, useState } from 'react'
import { userContext } from '@/Utils/contexts.js'
import { ReplyContext } from "@/Utils/contexts.js"
import { basePostUrl } from '@/Utils/apiUtils'
import AccountIcon from "@/Components/AccountIcon/AccountIcon"
import "./CommentOnPost.css"
import PropTypes from 'prop-types'

const CommentOnPost = ({postID}) => {
    const [data, setData] = useState({"commentText": localStorage.getItem(`uncommited_comment_${postID}`) || ""})
    const { LoggedInUser } = useContext(userContext)
    const { refetchReplies } = useContext(ReplyContext)

    const handleChange = (e) => {
        localStorage.setItem(`uncommited_comment_${postID}`, e.target.value)
        setData({...data, [e.target.id]: e.target.value})
    }

    const handleKeyDown = (e) => {
        // 13 is keyCode for "enter" button
        if (e.keyCode === 13) {
            submitPostComment(e)
        }
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
                    onKeyDown={(e) => handleKeyDown(e)}
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

CommentOnPost.propTypes = {
    postID: PropTypes.number,
}

export default CommentOnPost