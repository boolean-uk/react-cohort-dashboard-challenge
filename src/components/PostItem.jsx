import { useState } from 'react';
import Avatar from './Avatar';

function PostItem({ addNewPost, currentUser }) {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (content.trim()) {
      const newPost = {
        title: 'New Post',
        content: content,
        contactId: currentUser.id, 
      };
      
      try {
        const response = await fetch('https://boolean-uk-api-server.fly.dev/alinjo/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newPost),
        });
        
        if (!response.ok) {
          throw new Error('Failed to create post');
        }
        
        const createdPost = await response.json();

        const postWithUserInfo = {
          ...createdPost,
          firstName: currentUser.firstName,
          lastName: currentUser.lastName,
          favouriteColour: currentUser.favouriteColour
        };
        addNewPost(postWithUserInfo);
        setContent(''); 
      } catch (error) {
        console.error('Error creating post:', error);
      }
    }
  };

  return (
    <div className="post-item">
      <Avatar name={`${currentUser.firstName} ${currentUser.lastName}`} favouriteColour={currentUser.favouriteColour} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="post-input"
        />
        <button type="submit" className="post-button">Post</button>
      </form>
    </div>
  );
}

export default PostItem;
