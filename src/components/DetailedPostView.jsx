
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CommentSection from './CommentSection'

function DetailedPostView() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPost()
  }, [id])

  const fetchPost = async () => {
    try {
      const response = await fetch(`https://boolean-uk-api-server.fly.dev/posts/${id}`)
      if (!response.ok) throw new Error('Error fetching post');
      const data = await response.json()
      setPost(data);
    } catch (error) {
      setError('Error fetching post')
    } finally {
      setLoading(false)
    }
  };

  const addComment = async (postId, user, content) => {
    try {
      const response = await fetch(`https://boolean-uk-api-server.fly.dev/posts/${postId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, content })
      })
      if (!response.ok) throw new Error('Error adding comment')
      const newComment = await response.json()
      setPost(prevPost => ({
        ...prevPost,
        comments: [...prevPost.comments, newComment]
      }))
    } catch (error) {
      console.error('Error adding comment', error)
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
  if (!post) return <div>Post not found</div>

  return (
    <div>
      <h2>{post.user}</h2>
      <p>{post.content}</p>
      <CommentSection postId={post.id} comments={post.comments} addComment={addComment} />
    </div>
  )
}

export default DetailedPostView
