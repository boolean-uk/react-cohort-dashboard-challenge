import { useState, useEffect } from 'react';
import '../style/dash.css';

// Helper function to get initials from a contact object
const getInitials = (contact) => {
  if (contact && contact.firstName && contact.lastName) {
    return `${contact.firstName[0]}${contact.lastName[0]}`.toUpperCase();
  }
  return '??';
};

const initialComment = {
  id: '',
  content: "Default content",
  contactId: 1,
  postId: 1,
};

const initialFormData = {
  id: '',
  title: "Default Title",
  content: "",
  contactId: 1,
  comments: []
};

export function Dash({ data, setData, contacts }) {
  const [post, setPost] = useState(initialFormData);
  const [nextId, setNextId] = useState(data.length + 1);
  const [nextId2, setNextId2] = useState(1); // Initialize with correct next comment ID
  const [newComment, setNewComment] = useState(initialComment);
  const [commentsByPostId, setCommentsByPostId] = useState({});
  const [visibleComments, setVisibleComments] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchCommentsForPost = async (postId) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://boolean-api-server.fly.dev/ateeb020301/post/${postId}/comment`);
      if (!response.ok) throw new Error('Network response was not ok');
      const comments = await response.json();
      setCommentsByPostId((prevComments) => ({ ...prevComments, [postId]: comments }));
    } catch (error) {
      console.error("Fetching error: ", error);
      setError('Failed to fetch comments.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (data.length > 0) {
      data.forEach((post) => {
        fetchCommentsForPost(post.id);
      });
    }
  }, [data]);

const handleCommentChange = (postId) => (event) => {
  setNewComment({
    ...newComment,
    content: event.target.value,
    postId,
  });
};

const handleSubmitComment = (postId) => async (event) => {
  event.preventDefault();
  const newPostComment = {
    ...newComment,
    id: nextId2,
    postId,
  };

  // Assuming comments are stored in an array in commentsByPostId[postId]
  const updatedComments = commentsByPostId[postId]
    ? [...commentsByPostId[postId], newPostComment]
    : [newPostComment];

  setCommentsByPostId({
    ...commentsByPostId,
    [postId]: updatedComments,
  });

  // Update nextId2 for next comment's ID
  setNextId2(nextId2 + 1);
  // Reset newComment to initial state or clear the text area
  setNewComment({ ...initialComment, content: '', postId });
  // Optionally, you might want to send this new comment to the backend
};

const handleSubmit = (event) => {
  event.preventDefault();
  const newPost = {
    ...post,
    id: nextId, // Assuming nextId is correctly set to be unique
  };

  // Update your data (posts) state with the new post
  setData((prevData) => [...prevData, newPost]);
  
  // Update nextId for the next post
  setNextId(nextId + 1);
  
  // Reset post form to initial state
  setPost(initialFormData);
};

const handleChange = (event) => {
  const { value } = event.target;
  setPost({
    ...post,
    content: value,
  });
};

const toggleCommentsVisibility = (postId) => {
  setVisibleComments((prevState) => ({
    ...prevState,
    [postId]: !prevState[postId],
  }));
};


  const findContactById = (contactId) => contacts.find((contact) => contact.id === contactId);

  return (
    <main className="main green">
      {isLoading ? <div>Loading...</div> : (
        <>
          <form className='createPost' onSubmit={handleSubmit}>
            <h4>Create Post</h4>
            <textarea
              className='textInput'
              placeholder='Whats on your mind?'
              onChange={handleChange}
              value={post.content}
            />
            <button type='submit' id='postBtn'>Post</button>
          </form>
          {data.slice().reverse().map((postItem, index) => {
            const contact = findContactById(postItem.contactId);
            const initials = getInitials(contact);

            return (
              <div key={index} className='yellow'>
                <div className="post-header">
                  <div className="initials-circle">{initials}</div>
                  <div>
                    <h3>{postItem.title}</h3>
                    <p>{postItem.content}</p>
                  </div>
                </div>
                <button onClick={() => toggleCommentsVisibility(postItem.id)} className="toggle-comments-btn">
                  {visibleComments[postItem.id] ? 'Hide Comments' : 'Show Comments'}
                </button>
                {visibleComments[postItem.id] && (
                  <div className='comments-section'>
                    <form className='createComment' onSubmit={handleSubmitComment(postItem.id)}>
                      <textarea
                        className='textInput'
                        placeholder='Add a comment...'
                        onChange={handleCommentChange(postItem.id)}
                        value={postItem.id === newComment.postId ? newComment.content : ''}
                      />
                      <button type='submit' id='commentBtn'>Comment</button>
                    </form>
                    {commentsByPostId[postItem.id] && commentsByPostId[postItem.id].map((comment, commentIndex) => {
                      const commentContact = findContactById(comment.contactId);
                      return (
                        <div key={commentIndex} className='comment'>
                          <div className="initials-circle">{getInitials(commentContact)}</div>
                          <p>{comment.content}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
                {error && <div className="error">{error}</div>}
              </div>
            );
          })}
        </>
      )}
    </main>
  );
}
