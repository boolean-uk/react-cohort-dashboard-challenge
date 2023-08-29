import React, { useState, useEffect } from 'react'
import AuthorInitials from './AuthorInitials'
import { usePosts } from '../contexts/PostContext'

function NewPostForm() {
  const [formData, setFormData] = useState({ body: '' })
  const [message, setMessage] = useState('')
  const { loggedInUser, setLoggedInUser, addNewPost } = usePosts()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok")
        return response.json()
      })
      .then(user => setLoggedInUser(user))
      .catch(console.error)
  }, [setLoggedInUser])

  const getInitials = (name) => {
    return name.split(' ').map(part => part[0]).join('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loggedInUser) {
      setMessage("Error: User not logged in.");
      return;
    }

    const title = 'This is a new post'; 
    const postData = {
      title,
      ...formData,
      userId: loggedInUser.id,
      userName: loggedInUser.name,
      userInitials: getInitials(loggedInUser.name),
      comments: []
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok")
        return response.json()
      })
      .then(data => {
        setMessage("Post created successfully!")
        setFormData({ body: '' })
        data.id = new Date().getTime()
        data.userInitials = postData.userInitials
        addNewPost(data)
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error.message)
        setMessage("Error creating post. Please try again.")
      })
  }

  return (
    <div className="new-post-container">
      {loggedInUser ? (
        <AuthorInitials name={loggedInUser.name} id={loggedInUser.id} />
      ) : (
        <div>Loading...</div>
      )}
      <input 
        name="postContent"
        className="new-post-input"
        value={formData.body}
        onChange={e => setFormData({ ...formData, body: e.target.value })}
        placeholder="What's on your mind?"
      />
      <button onClick={handleSubmit} className="post-submit-btn">Post</button>
      {message && <p>{message}</p>}
    </div>
  )
}

export default NewPostForm;