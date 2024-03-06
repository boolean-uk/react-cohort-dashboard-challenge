import React, { useContext, useState } from 'react';
import { CurrentUserContext } from '../../../App';
import '../Home.css'; 

function CreateComment({ fetchComments, postId }) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [content, setContent] = useState('');
  const URL = `https://boolean-api-server.fly.dev/thegrevling/post/${postId}/comment`;

  async function handleSubmit(e) {
    e.preventDefault();

    const postData = {
      postId: postId,
      content: content,
      contactId: currentUser.id,
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
        setContent('');
        fetchComments();
      } else {
        // Handle the error case
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="create-comment-container">
      <div className="textarea-section">
        <textarea
          className="content"
          type="text"
          placeholder="Comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>

      <div className="actions-section">
        <button type="submit" disabled={content.length < 1} className="submit-btn">
          Send
        </button>
      </div>
    </form>
  );
}

export default CreateComment;
