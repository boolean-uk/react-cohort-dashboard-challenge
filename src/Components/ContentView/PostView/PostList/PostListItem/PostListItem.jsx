import { basePostUrl, baseUserUrl } from '@/Utils/apiUtils'
import { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import "./PostListItem.css"
import PostItemHeader from './PostItemHeader/PostItemHeader.jsx'
import PostReplyList from './PostReplyList/PostReplyList'
import { PostsContext, userContext } from '@/Utils/contexts'

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

    const deletePost = async (id) => {
        const request = {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        }

        await fetch(`${basePostUrl}/${id}`, request)
        await fetchPosts()
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
            .then(() => console.log(post))
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
                {(user?.id === LoggedInUser.id) && <div className='utility-container'>
                    {!editMode && <>
                        <img 
                            src="https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/pencil-icon.png"
                            onClick={() => setEditMode(true)}
                            />
                        <img 
                            src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/delete-icon.png"
                            onClick={() => deletePost(post.id)}
                        />
                    </>}
                    {editMode && 
                            <>
                            <button onClick={() => handleFinishEditing(post.id)}>Confirm</button> 
                            <button onClick={() => setEditMode(false)}>Cancel</button> 
                            </>
                        }
                </div>}
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