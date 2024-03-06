import { useState, useEffect } from 'react'
import AddComment from './Post/AddComment'
import CommentList from './Post/CommentList'
import PostListItemText from './Post/PostListItemText'
import { getComments, getPostById, postComment } from "./Api"
import './stylesheets/Posts.css'
import { json, useParams } from 'react-router-dom'

function PostListItem({ post, one }) {
    const [comments, setComments] = useState([])


    useEffect(() => {
        getComments(post.id)
            .then((response) => setComments(response))
    }, [post])

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
        <div className={`post ${one ? 'onlyPost' : ''}`}>
            <PostListItemText post={post} />
            <CommentList comments={comments} />
            <AddComment setComments={addComment} />
        </div>
    )
}

export default PostListItem

//miraCampaign