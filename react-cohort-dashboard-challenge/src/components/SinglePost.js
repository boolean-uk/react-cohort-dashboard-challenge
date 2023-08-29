import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import AuthorInitials from './AuthorInitials'
import CommentForm from './CommentForm'
import { usePosts } from '../contexts/PostContext'

function SinglePost() {
    const { postId } = useParams()
    const {
      posts: globalPosts,
      addCommentToPost,
      loggedInUser,
      editCommentInPost,
      deleteCommentFromPost
    } = usePosts()
    const [post, setPost] = useState(null)
    const [editingComment, setEditingComment] = useState(null)
    const [tempCommentBody, setTempCommentBody] = useState('')

  const startEditingComment = (commentId, body) => {
    console.log("Starting to edit comment with ID:", commentId)
    console.log("Initial body of the comment:", body)
    setEditingComment(commentId)
    setTempCommentBody(body)
    }

    const finishEditingComment = () => {
        console.log("Finishing editing for comment with ID:", editingComment)
    console.log("Updated comment body:", tempCommentBody)
    if (editingComment) {
        handleEditComment(editingComment, tempCommentBody)
        setEditingComment(null) // for resetting edit comment state
    }
    }

  const handleCommentSubmit = (newComment) => {
    addCommentToPost(newComment.postId, newComment)
  }

  const handleDeleteComment = (commentId) => {
    deleteCommentFromPost(post.id, commentId)
  }

  const handleEditComment = (commentId, updatedBody) => {
    console.log("Editing comment in post with ID:", post.id)
    console.log("Editing comment with ID:", commentId)
    console.log("Updated body for the comment:", updatedBody)
    editCommentInPost(post.id, commentId, updatedBody)
}

useEffect(() => {
    const localPost = globalPosts.find(p => p.id.toString() === postId)
    if (localPost) {
      setPost(localPost)
    } else {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
          if (!response.ok) throw new Error("Failed to fetch post data")
          return response.json()
        })
        .then(postData => Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`),
          fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`),
          Promise.resolve(postData)
        ]))
        .then(([commentsResponse, userResponse, postData]) => Promise.all([
          commentsResponse.json(),
          userResponse.json(),
          postData
        ]))
        .then(([commentsData, userData, postData]) => {
          setPost({
            ...postData,
            userName: userData.name,
            comments: commentsData
          });
        })
        .catch(console.error)
    }
  }, [postId, globalPosts])


  if (!post) return <p>Loading...</p>;

  return (
    <div className="post-item">
        <div className="author-container">
            <Link to={`/profile/${post.userId}`} className="author-link">
                <AuthorInitials name={post.userName} id={post.userId} className='initials-post' />
                <span className="author-name">{post.userName}</span>
            </Link>
        </div>

        <div className="post-content">
            <h2 className='post-title'>{post.title}</h2>
            <p>{post.body}</p>
        </div>

        <ul className="comments-list">
            {post.comments.map(comment => (
                <li key={comment.id}>
                    <Link to={`/profile/${loggedInUser.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <AuthorInitials name={loggedInUser.name} id={loggedInUser.id} />
                    </Link>

                    {editingComment === comment.id ? (
                        <div>
                            <textarea
                                value={tempCommentBody}
                                onChange={e => setTempCommentBody(e.target.value)}
                            />
                            <button onClick={finishEditingComment}>Done Editing</button>
                        </div>
                    ) : (
                        <span>
                            {comment.body}
                            <button onClick={() => startEditingComment(comment.id, comment.body)}>Edit</button>
                            <button onClick={() => handleDeleteComment(comment.id)}>Delete</button>
                        </span>
                    )}
                </li>
            ))}
        </ul>

        <CommentForm postId={postId} onCommentSubmit={handleCommentSubmit} />
    </div>
)}

export default SinglePost