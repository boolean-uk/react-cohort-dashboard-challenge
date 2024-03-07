import { basePostUrl } from "@/Utils/apiUtils"
import PostReplyItem from "./PostReplyItem/PostReplyItem"
import { useState, useEffect } from 'react'
import "./PostReplyList.css"
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { ReplyContext } from "@/Utils/contexts"
import CommentOnPost from './CommentOnPost/CommentOnPost'

const PostReplyList = ({ postID }) => {
    const location = useLocation()
    const [replies, setReplies] = useState([])
    const [replyLimit, setReplyLimit] = useState(() => 
        location.pathname.includes("/post/") ? undefined : 3)
        
    const retrieveReplies = async (id) => {
        await fetch(`${basePostUrl}/${id}/comment`)
            .then((res) => res.json())
            .then((res) => setReplies([...res]))
    }

    const triggerRefetch = (id) => {
        retrieveReplies(id)
    }

    useEffect(() => {
        retrieveReplies(postID)
    }, [postID])

    return (
        <ReplyContext.Provider
            value={{refetchReplies: triggerRefetch,}}
        >
        <div className="post-reply-container">
            {(replies.length > replyLimit) && 
                <button
                    className="show-more-replies-button"
                    onClick={() => setReplyLimit(undefined)}
                >
                    See previous comments
                </button>
            }
            {replies.slice(-replyLimit).map((reply, index) => (
                <PostReplyItem key={index} reply={reply}/>
            ))}
            <div>
                <CommentOnPost postID={postID}/>
            </div>
        </div>
        </ReplyContext.Provider>
    )
}

PostReplyList.propTypes = {
    postID: PropTypes.number,
}

export default PostReplyList