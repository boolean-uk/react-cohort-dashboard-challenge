import { useState, useEffect } from 'react'
import AddComment from './Post/AddComment'
import CommentList from './Post/CommentList'
import PostListItemText from './Post/PostListItemText'
import { getComments, postComment } from "./Api"
import './stylesheets/Posts.css'

function PostListItem({ post }) {
    const [comments, setComments] = useState([])
    useEffect(() => {
        getComments(post.id)
            .then((response) => setComments(response))
    }, [])

    const addComment = (comment) => {
        postComment(post.id, comment, 1)
        comments.push({
            postId: post.id,
            content: comment,
            contactId: 1
        })
        setComments([...comments])
    }
    return (
        <div className='post'>
            <PostListItemText post={post} />
            <CommentList comments={comments} />
            <AddComment setComments={addComment} />
        </div>
    )
}

export default PostListItem

//miraCampaign