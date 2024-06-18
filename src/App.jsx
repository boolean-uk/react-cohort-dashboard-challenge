import './App.css';
import React, { useState, useEffect } from 'react';
import PostForm from './components/PostForm'
import Post from './components/Post'
import CommentSection from './components/CommentSection'
import DetailedPostView from './components/DetailedPostView'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://boolean-uk-api-server.fly.dev/Alakowe19/post')
      if (!response.ok) {
        throw new Error('Error fetching posts')
      }
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      setError('Error fetching posts')
    } finally {
      setLoading(false)
    }
  };

  const addPost = async (user, content) => {
    try {
      const response = await fetch('https://boolean-uk-api-server.fly.dev/Alakowe19/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, content, comments: [] })
      });
      if (!response.ok) {
        throw new Error('Error adding post')
      }
      const newPost = await response.json()
      setPosts([newPost, ...posts])
    } catch (error) {
      console.error('Error adding post', error)
    }
  };

  const addComment = async (postId, user, content) => {
    try {
      const response = await fetch(`https://boolean-uk-api-server.fly.dev/Alakowe19/post/${postId}/comment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, content })
      });
      if (!response.ok) {
        throw new Error('Error adding comment')
      }
      const newComment = await response.json()
      const updatedPosts = posts.map(post =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      );
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Error adding comment', error)
    }
  };

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Cohort Manager</h1>
        </header>
        <div className="main-content">
          <PostForm addPost={addPost} />
          <Routes>
            {posts.map(post => (
              <Route
                key={post.id}
                path={`/post/${post.id}`}
                element={<CommentSection postId={post.id} comments={post.comments} addComment={addComment} />}
              />
            ))}
            <Route
              exact
              path="/post/:id"
              element={<DetailedPostView />}
            />
          </Routes>
          <div className="posts">
            {posts.map(post => (
              <Post
                key={post.id}
                postId={post.id}
                user={post.user || 'User'} 
                content={post.content}
                comments={post.comments}
                addComment={addComment}
              />
            ))}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App
