import React, { useState, useEffect } from 'react';
import Post from './Post';
import './PostFeed.css';

function PostFeed() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    console.log('Fetching posts...');
    fetch('https://boolean-uk-api-server.fly.dev/posts')
      .then(response => {
        console.log('Fetch response:', response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched posts:', data);
        setPosts(data);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const handleAddPost = () => {
    const newPostObject = {
      text: newPost,
      userId: 1
    };
    console.log('Adding new post...', newPostObject);
    fetch(`https://boolean-uk-api-server.fly.dev/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPostObject)
    })
    .then(response => {
      console.log('Add post response:', response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Added post:', data);
      setPosts([data, ...posts]);
      setNewPost("");
    })
    .catch(error => console.error('Error adding post:', error));
  };

  return (
    <div className="post-feed-container">
      <div className="new-post-container">
        <input 
          type="text" 
          value={newPost} 
          onChange={(e) => setNewPost(e.target.value)} 
          placeholder="What's on your mind?" 
        />
        <button onClick={handleAddPost}>Post</button>
      </div>
      <div className="post-feed">
        {posts.length === 0 && <p>No posts available</p>}
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default PostFeed;
