import { basePostUrl, baseUserUrl } from '@/Utils/apiUtils'
import { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import "./PostListItem.css"
import PostItemHeader from './PostItemHeader/PostItemHeader.jsx'
import PostReplyList from './PostReplyList/PostReplyList'
import { PostsContext, userContext } from '@/Utils/contexts'
import PostItemUtility from './PostItemUtility/PostItemUtility'

const PostListItem = ({post}) => {
    const [user, setUser] = useState()
    const [editMode, setEditMode] = useState(false)
    const [editedContent, setEditedContent] = useState(post.content || "")
    const { fetchPosts } = useContext(PostsContext)
    const { LoggedInUser } = useContext(userContext)

    const fetchUserData = async (id) => {
        await fetch(baseUserUrl+"/"+id)
            .then((res) => res.json())
            .then((res) => setUser({...res}))
    }

    const handleFinishEditing = async (id) => {
        const request = {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({...post, content: editedContent})
        }
        await fetch(`${basePostUrl}/${id}`, request)
            .then((res) => res.json())
            .then((res) => post = res)
        setEditedContent(post.content)
        setEditMode(false)
        await fetchPosts()
    }

    useEffect(() => {
        if (post) {
            fetchUserData(post.contactId)
        }
    }, [post])

    return (
        <li>
            <div className='post-panel'>
                {(user?.id === LoggedInUser?.id) && 
                    <PostItemUtility 
                        editMode={editMode}
                        setEditMode={setEditMode}
                        handleFinishEditing={handleFinishEditing}
                        postID={post.id}
                />}
                {user && 
                    <PostItemHeader user={user} post={post}/>
                }
                <div className='post-content-container'>
                    {!editMode && <p>{post?.content}</p>}
                    {editMode && 
                        <textarea
                            className="text-like-field"
                            value={editedContent}
                            onChange={(e) => setEditedContent(e.target.value)}
                        >
                            {post?.content}
                        </textarea>
                    }
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