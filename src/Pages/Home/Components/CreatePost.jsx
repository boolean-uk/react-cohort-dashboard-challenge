import '../Home.css';
import React, { useContext, useState } from 'react';
import { CurrentUserContext } from '../../../App';

function CreatePost({fetchPosts}) {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const URL = "https://boolean-api-server.fly.dev/thegrevling/post";

  async function handleSubmit(e) {
    e.preventDefault();

    const postData = {
      title: title,
      content: content,
      contactId: currentUser.id
    };

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        // Post request was successful, you may want to handle the response
        console.log('Post created successfully');
        fetchPosts()
      } else {
        // Handle the error case
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="textarea-section">
        <textarea
          className="content"
          type="text"
          placeholder="What's the title?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>
        <textarea
          className="content"
          type="text"
          placeholder="What is happening?!"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>

      <div></div>

      <div className="actions-section">
        <button type="submit" disabled={content.length < 1} className="tweet-btn">
          Send
        </button>
      </div>
    </form>
  );
}

export default CreatePost;
