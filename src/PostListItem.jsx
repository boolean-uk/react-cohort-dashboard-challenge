import { useState, useEffect, createContext } from 'react'
import AddComment from './Post/AddComment'
import CommentList from './Post/CommentList'
import PostListItemText from './Post/PostListItemText'
import { deleteComment, getComments, getPostById, postComment } from "./Api"
import './stylesheets/Posts.css'

export const CommentContext = createContext()

function PostListItem({ post, one, removePost }) {
    const [comments, setComments] = useState([])


    useEffect(() => {
        getComments(post.id)
            .then((response) => setComments(response))
    }, [post])

    const addComment = (comment) => {
        postComment(post.id, comment, 1).then((response) => {
            comments.push(response)
            setComments([...comments])
        })
    }


    return (
        <div className={`post ${one ? 'onlyPost' : ''}`}>
            <PostListItemText post={post} removePost={removePost} />
            <CommentContext.Provider value={{
                comments: comments,
                setComments: setComments
            }}>
                <CommentList />
                <AddComment setComments={addComment} />
            </CommentContext.Provider>
        </div>
    )
}

export default PostListItem

//miraCampaign