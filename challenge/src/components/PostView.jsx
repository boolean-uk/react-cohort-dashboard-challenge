import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostView({ data, contacts }) {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    // Find the post and its author
    const foundPost = data.find(item => item.id.toString() === postId);
    if (foundPost) {
      setPost(foundPost);
      const foundAuthor = contacts.find(contact => contact.id === foundPost.contactId);
      setAuthor(foundAuthor);
    }
  }, [data, contacts, postId]);

  useEffect(() => {
    // Fetch comments for the post
    if (postId) {
      fetch(`https://boolean-api-server.fly.dev/ateeb020301/post/${postId}/comment`)
        .then(response => response.json())
        .then(setComments)
        .catch(console.error); // Ideally, handle this error appropriately
    }
  }, [postId]);

  if (!post || !author) {
    return <div>Loading post...</div>;
  }

  return (
    <div>
      <h2>Author: {author ? `${author.firstName} ${author.lastName}` : 'Unknown'}</h2>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <h4>Comments:</h4>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.content}</p>
          </div>
        ))
      ) : (
        <p>No comments.</p>
      )}
    </div>
  );
}

export default PostView;
