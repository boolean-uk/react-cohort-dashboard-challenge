import React, { createContext, useState, useContext, useEffect } from 'react'

const defaultContextValue = {
  posts: [],
  setPosts: () => {},
  addCommentToPost: () => {},
  loggedInUser: null,
  setLoggedInUser: () => {}
}

const PostContext = createContext(defaultContextValue)

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([])
  const [loggedInUser, setLoggedInUser] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok")
        return response.json()
      })
      .then(user => setLoggedInUser(user))
      .catch(error => console.error('There was a problem fetching the user:', error.message))
  }, [])

  const addCommentToPost = (postId, comment) => {
    setPosts(prevPosts => prevPosts.map(post => 
      post.id.toString() === postId
        ? { ...post, comments: post.comments ? [...post.comments, comment] : [comment] }
        : post
    ))
  }

  const addNewPost = (newPost) => {
    setPosts(prevPosts => [newPost, ...prevPosts])
  }

  const editCommentInPost = (postId, commentId, newBody) => {
    setPosts(prevPosts => prevPosts.map(post => 
      post.id === postId
        ? { ...post, comments: post.comments.map(comment => comment.id === commentId ? { ...comment, body: newBody } : comment) }
        : post
    ))
  }

  const deleteCommentFromPost = (postId, commentId) => {
    setPosts(prevPosts => prevPosts.map(post => 
      post.id === postId
        ? { ...post, comments: post.comments.filter(comment => comment.id !== commentId) }
        : post
    ))
  }

  return (
    <PostContext.Provider value={{ posts, setPosts, addCommentToPost, addNewPost, loggedInUser, setLoggedInUser, editCommentInPost, deleteCommentFromPost }}>
      {children}
    </PostContext.Provider>
  )
}

export const usePosts = () => {
  const context = useContext(PostContext)

  if (!context) {
    throw new Error('usePosts must be used within a PostProvider')
  }

  return context
}

export default PostContext