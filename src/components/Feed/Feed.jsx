import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Feed() {
  const [postData, setPostData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');
  const [newCommentContent, setNewCommentContent] = useState('');
  const commentIdSet = new Set();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://boolean-api-server.fly.dev/irlydo/post/`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setPostData(data.reverse());
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://boolean-api-server.fly.dev/irlydo/contact");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setContactData(data);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchPostComments = async (postId) => {
      try {
        const response = await fetch(`https://boolean-api-server.fly.dev/irlydo/post/${postId}/comment`);
        if (!response.ok) {
          throw new Error(`Network response was not ok. Status: ${response.status}`);
        }

        const data = await response.json();
        return data.filter((comment) => !commentIdSet.has(comment.id));
      } catch (error) {
        console.error("Error fetching comment data:", error);
      }
    };

    setCommentData([]);
    commentIdSet.clear();

    const fetchCommentsPromises = postData.map((post) => fetchPostComments(post.id));
    
    let isMounted = true;

    Promise.all(fetchCommentsPromises).then((commentsArrays) => {
      if (isMounted) {
        const uniqueComments = [].concat(...commentsArrays).filter(comment => {
          if (commentIdSet.has(comment.id)) {
            return false;
          }
          commentIdSet.add(comment.id);
          return true;
        });
        setCommentData(uniqueComments);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [postData]);
  


  const handlePostSubmit = async () => {
    try {
      const response = await fetch('https://boolean-api-server.fly.dev/irlydo/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'New post',
          content: newPostContent,
          contactId: 15,
          // Add any other required fields for creating a new post
        }),
      });

      console.log('POST Request Response:', response);
      // Assuming the server responds with the created post
      const newPost = await response.json();

      // Update the state to include the new post without reversing
      setPostData((prevData) => [newPost, ...prevData]);

      // Clear the input field
      setNewPostContent('');
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  const handleCommentSubmit = async (postId) => {
    try {
      if (!postId) {
        console.error('postId is required for submitting a comment');
        return;
      }

      const response = await fetch(`https://boolean-api-server.fly.dev/irlydo/post/${postId}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: newCommentContent,
          contactId: 15, // Replace with the actual contactId for the current user
          postId: postId, // Pass the actual postId here
        }),
      });

      // Assuming the server responds with the created comment
      const newComment = await response.json();

      // Update the state to include the new comment
      setCommentData((prevData) => [...prevData, newComment]);

      // Clear the input field
      setNewCommentContent('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };


  return (
    <ul className="feed-ul">
      <input
        type='text'
        placeholder="What's on your mind?"
        value={newPostContent}
        onChange={(e) => setNewPostContent(e.target.value)}
      ></input>
      <button type="button" onClick={handlePostSubmit}>
        Submit post
      </button>
      {postData.map((post) => {
        const contact = contactData.find((contact) => contact.id === post.contactId);
        if (!contact) {
          console.error(`Contact not found for post with id ${post.id}`);
          return null; // or handle this case appropriately
        }

        let initials = `${contact.firstName[0]}${contact.lastName[0]}`;
        if (contact.firstName && contact.lastName) {

        }
        const filteredComments = commentData
        .filter((comment) => comment.postId === post.id)
        .filter((comment) => !commentIdSet.has(comment.id));
      
        return (
          <li key={post.id} className="post">
            <div className="post-header">
              <p className='initials'>{initials}</p>
              <div className="author-and-title">
                <h3 className="full-name">{contact.firstName} {contact.lastName}</h3>
                <Link to={`/post/${post.id}`}><h5>{post.title}</h5></Link>
              </div>
            </div>
            <p className='post-content'>{post.content}</p>
            <hr></hr>
            <ul>
              {filteredComments.map((comment, index) => {
                  const commenterContact = contactData.find((contact) => contact.id === comment.contactId);

                  let commenterInitials = `${commenterContact.firstName[0]}${commenterContact.lastName[0]}`;

                  const uniqueKey = `${post.id}-${index}`
                  return (
                    <li className="comment-section" key={uniqueKey}>
                      <p className='commenter-initials'>{commenterInitials}</p>
                      <div className="comment-name-and-content">
                        <p className='commenter-name'>{commenterContact.firstName} {commenterContact.lastName}</p>
                        <p>{comment.content}</p>
                      </div>
                    </li>
                  );
                })}
            </ul>

            <hr></hr>
            <input type="text" placeholder="Add comment" value={newCommentContent} onChange={(e) => setNewCommentContent(e.target.value)}></input>
            <button type="button" onClick={() => handleCommentSubmit(post.id)}>Submit</button>
          </li>
        );
      })}
    </ul>
  );
}
