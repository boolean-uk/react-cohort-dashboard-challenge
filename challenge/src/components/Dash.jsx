import { useState, useEffect } from 'react';
import '../style/dash.css';
import { Link } from 'react-router-dom';

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
  const [nextId2, setNextId2] = useState(1);
  const [newComment, setNewComment] = useState(initialComment);
  const [commentsByPostId, setCommentsByPostId] = useState({});
  const [commentsVisibility, setCommentsVisibility] = useState({});
  const [visibleCommentCount, setVisibleCommentCount] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchCommentsForPost = async (postId) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://boolean-api-server.fly.dev/ateeb020301/post/${postId}/comment`);
      if (!response.ok) throw new Error('Network response was not ok');
      const comments = await response.json();
      setCommentsByPostId((prevComments) => ({ ...prevComments, [postId]: comments }));
      setCommentsVisibility(prev => ({ ...prev, [postId]: false }));
      setVisibleCommentCount(prev => ({ ...prev, [postId]: 3 }));
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

    const updatedComments = commentsByPostId[postId]
      ? [...commentsByPostId[postId], newPostComment]
      : [newPostComment];

    setCommentsByPostId({
      ...commentsByPostId,
      [postId]: updatedComments,
    });

    setNextId2(nextId2 + 1);
    setNewComment({ ...initialComment, content: '', postId });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      ...post,
      id: nextId,
    };

    setData((prevData) => [...prevData, newPost]);
    setNextId(nextId + 1);
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
    setCommentsVisibility((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  const toggleCommentCount = (postId) => {
    setVisibleCommentCount((prevState) => ({
      ...prevState,
      [postId]: prevState[postId] > 3 ? 3 : 9999,
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
            const style = {
              backgroundColor: contact ? contact.favouriteColour : 'grey'
            };

            return (
              <div key={index} className='yellow'>
                <div className="post-header">
                  <div className="initials-circle" style={style}>{initials}</div>
                  <div>
                    <p>{contact ? `${contact.firstName} ${contact.lastName}` : 'Unknown Author'}</p>
                    <Link to={`/post/${postItem.id}`}>
                        <h3 style={{cursor: 'pointer'}}>{postItem.title}</h3>
                    </Link>
                    <p>{postItem.content}</p>
                  </div>
                </div>
                <button onClick={() => toggleCommentsVisibility(postItem.id)} className="toggle-comments-btn">
                  {commentsVisibility[postItem.id] ? 'Hide Comments' : 'Show Comments'}
                </button>
                {commentsVisibility[postItem.id] && (
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
                    {commentsByPostId[postItem.id] && commentsByPostId[postItem.id]
                      .slice(0, visibleCommentCount[postItem.id])
                      .map((comment, commentIndex) => {
                        const commentContact = findContactById(comment.contactId);
                        return (
                          <div key={commentIndex} className='comment'>
                            <div className="initials-circle" style={{...style, backgroundColor: commentContact ? commentContact.favouriteColour : 'grey'}}>{getInitials(commentContact)}</div>
                            <p>{comment.content}</p>
                          </div>
                        );
                      })}
                    {commentsByPostId[postItem.id] && commentsByPostId[postItem.id].length > 3 && (
                      <button onClick={() => toggleCommentCount(postItem.id)} className="show-more-comments-btn">
                        {visibleCommentCount[postItem.id] > 3 ? 'Show Less' : 'Show More'}
                      </button>
                    )}
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
