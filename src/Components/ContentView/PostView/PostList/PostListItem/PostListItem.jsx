import { baseUserUrl } from '@/Utils/apiUtils'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import "./PostListItem.css"
import PostItemHeader from './PostItemHeader/PostItemHeader.jsx'
import PostReplyList from './PostReplyList/PostReplyList'

const PostListItem = ({post}) => {
    const [user, setUser] = useState()

    const fetchUserData = async (id) => {
        await fetch(baseUserUrl+"/"+id)
            .then((res) => res.json())
            .then((res) => setUser({...res}))
    }

    useEffect(() => {
        if (post) {
            fetchUserData(post.contactId)
        }
    }, [post])

    return (
        <li>
            <div className='post-panel'>
                {user && 
                    <PostItemHeader user={user} post={post}/>
                }
                <div className='post-content-container'>
                    <p>{post?.content}</p>
                </div>
                <div>
                    <PostReplyList postID={post.id}/>
                </div>
            </div>
        </li>
    )
}

PostListItem.propTypes = {
    post: PropTypes.object,
}

export default PostListItem