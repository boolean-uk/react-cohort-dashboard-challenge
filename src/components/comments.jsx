import { useState, useEffect } from "react";

const Comments = ({ postURL, post }) => { // Accept postURL as a prop
  const [comments, setComments] = useState([]);

  const initialComments = [];

  useState(() => {
    setComments(initialComments);
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`${postURL}${post.id}/comments`);
        if (!response.ok) {
          throw new Error('Failed to fetch comments');
        }
        const commentsData = await response.json();
        setComments(commentsData);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
  
    fetchComments();
  }, [postURL, post.id]); 
  
  return (
    <>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </>
  );
};

export default Comments;


