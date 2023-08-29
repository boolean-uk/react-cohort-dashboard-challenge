import React, { useEffect, useState } from 'react'
import AuthorInitials from './AuthorInitials'
import { Link } from 'react-router-dom'
import CommentForm from './CommentForm'
import { usePosts } from '../contexts/PostContext'

function PostList() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [shouldRefreshPosts, setShouldRefreshPosts] = useState(true)
  const [expandedCommentsPosts, setExpandedCommentsPosts] = useState([])
  const [editingPost, setEditingPost] = useState(null)
  const { posts: contextPosts, addCommentToPost, setPosts, loggedInUser } = usePosts()

useEffect(() => {
  if (!shouldRefreshPosts) return

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok")
      return response.json();
    })
    .then(data => {
      const fetchedPosts = data.map(post => ({
        ...post,
        userId: post.userId === 1 ? Math.floor(Math.random() * 9) + 2 : post.userId,
        comments: []
      }))
      return { fetchedPosts, usersData: fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()) }
    })
    .then(async ({ fetchedPosts, usersData }) => {
      const users = await usersData;
      const integratedPosts = fetchedPosts.map(post => ({
        ...post,
        userName: (users.find(user => user.id === post.userId) || {}).name || 'Unknown'
      }))
      setPosts(prevPosts => [
        ...prevPosts,
        ...integratedPosts.filter(newPost => !prevPosts.some(prevPost => prevPost.id === newPost.id))
      ])
      setShouldRefreshPosts(false)
      setLoading(false)
    })
    .catch(err => {
      setError(err.message)
      setLoading(false)
    })
}, [setPosts, shouldRefreshPosts])

const handlePostChange = (postId, field, value) => {
  setPosts(contextPosts.map(p => p.id === postId ? { ...p, [field]: value } : p))
}

const handleCommentSubmit = (newComment) => {
  addCommentToPost(newComment.postId.toString(), newComment)
}

const handleDeletePost = (postId) => {
  setPosts(contextPosts.filter(p => p.id !== postId))
}

const handleEditPost = (postId, updatedTitle, updatedBody) => {
  setPosts(contextPosts.map(p => p.id === postId ? {...p, title: updatedTitle, body: updatedBody} : p))
  setEditingPost(null)
}


if (loading) return <div>Loading...</div>
if (error) return <div>Error: {error}</div>

return (
  <div>
    {contextPosts.map(post => (
      <div key={post.id} className="post-item">
        <div className="author-container">
          <Link to={`/profile/${post.userId}`} className="author-link">
            <AuthorInitials name={post.userName} id={post.userId} className='initials-post' />
            <span className="author-name">{post.userName}</span>
          </Link>
        </div>
        
        {editingPost === post.id ? (
          <div className="editing-post">
            <textarea value={post.title} onChange={(e) => handlePostChange(post.id, 'title', e.target.value)} />
            <textarea value={post.body} onChange={(e) => handlePostChange(post.id, 'body', e.target.value)} />
            <button onClick={() => handleEditPost(post.id, post.title, post.body)}>Done Editing</button>
          </div>
        ) : (
          <div className="post-details">
            <Link to={`/post/${post.id}`} className="author-link">
              <h2 className='post-title'>{post.title} </h2>
            </Link>
            <p>{post.body}</p>
            <button className='button-edit-post' onClick={() => setEditingPost(post.id)}>Edit post</button>
            <button className='button-delete-post' onClick={() => handleDeletePost(post.id)}>Delete post</button>
          </div>
        )}
        
        <ul className="comments-list">
          {post.comments.slice(0, expandedCommentsPosts.includes(post.id) ? undefined : 3).map((comment, index) => (
            <li key={index}>
              <Link to={`/profile/${loggedInUser.id}`} className="author-link">
                <AuthorInitials name={loggedInUser.name} id={loggedInUser.id} className='comment-author' />
              </Link>
              <span className='comment-body'>{comment.body}</span>
            </li>
          ))}
          {!expandedCommentsPosts.includes(post.id) && post.comments.length > 3 && (
            <li>
              <button className='button-all-comments' onClick={() => setExpandedCommentsPosts(prev => [...prev, post.id])}>
                See all comments
              </button>
            </li>
          )}
        </ul>

        {post.userName && <CommentForm postId={post.id} onCommentSubmit={handleCommentSubmit} />}
      </div>
    ))}
  </div>
)
}

export default PostList