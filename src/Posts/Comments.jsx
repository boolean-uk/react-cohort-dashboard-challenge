import { useState, useEffect } from "react";
import ContactId from "../Header/ContactId";

function Comments({ post, }) {
  const [comments, setComments] = useState([]);
  const [newComments, setNewComments] = useState({})
  
 

  const getComment = post.id;
  const URL3 = `https://boolean-api-server.fly.dev/LAVINIABENZAR/POST/${getComment}/COMMENT`;

  useEffect(() => {
    fetch(URL3)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  const handleSubmit = (event, postId) => {
    event.preventDefault();
    const newCommentValue = commentInputs[postId];

    fetch(`https://boolean-api-server.fly.dev/LAVINIABENZAR/post/${postId}/comment`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: "",
        postId: postId,
        contactId: 16,
        content: newCommentValue,
      }),
    })
      .then(response => response.json())
      .then(data => {
        setNewComments(prevComments => ({
          ...prevComments,
          [postId]: [...(prevComments[postId] || []), data],
        }));
        setNewComments(prevInputs => ({
          ...prevInputs,
          [postId]: "", // Clear the input after submission
        }));
      })
      .catch(error => console.error("Error commenting on post:", error));
  };
 



  return (
    <>
       {comments.map((comment) => {
        return (
          <div className='comments' key={comment.id}>
            <div className='commentInitials'>

            </div>
            <div className='commentBox'>
              <p>{comment.content}</p>
            </div>
          </div>
        );
      })}
    
    
    </>
     
       
    )
}

export default Comments;
