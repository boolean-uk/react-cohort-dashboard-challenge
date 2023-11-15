import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { editComment } from '../api/axios'
import React, { useState } from 'react'
import { Input, Button } from 'antd'
import { Link } from 'react-router-dom'

function Comment({ comment, onDeleteComment }) {

  console.log("comment",comment)

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(comment.content);

  const handleDeleteClick = () => {
    onDeleteComment(comment.id);
  }; 

  const handleEditComment = () => {
    if (editedText !== comment.body) {
      const editedComment = {
        body: editedText,
        name: comment.name,
        authorId: comment.authorId,
        authorInitials: comment.authorInitials,
        authorName: comment.authorName,
      };

      editComment(comment.id, editedComment)
        .then((response) => {
          console.log('Comment edited successfully:', response);
          comment.body = editedText;
          setIsEditing(false);
        })
        
        .catch((error) => {
          console.error("Error editing comment:", error);
        });
    }
  };

  return (
    <>
    <div className="comment" style={{backgroundColor: '#f3f3f3'}}>
    <div className="comment-author" style={{ display: 'flex', alignItems: 'center', marginBottom: '11px', marginTop: '7px' }}>
      <Link to={`/profile/${comment.userId}`} state={{ comment }}>
        <div className="author-initials">
        <p>{comment.authorInitials}</p>
        </div>
      </Link>
      <div style={{ marginLeft: '11px' }}> 
      <Link to={`/profile/${comment.userId}`} state={{ comment }}>
        <h5>{comment.authorName}</h5>
      </Link>
      </div>
      </div>
      <div className="comment-details" style={{ flex: 1 }}>
      {isEditing ? (
        <>
          <Input style={{backgroundColor: "#f0f0f0", color: "black", fontSize: "11px", borderRadius: "0"}}
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <Button type="text" style={{ backgroundColor: "#f0f0f0", color: "black", height: "30px", fontSize: "11px", fontWeight: "bold", borderRadius: "0", marginTop: '11px', marginBottom: '17px' }} onClick={handleEditComment}>Save</Button>
          <Button type="text" style={{ backgroundColor: "#ffffff", color: "black", height: "30px", fontSize: "11px", fontWeight: "bold", borderRadius: "0", marginTop: '11px', marginBottom: '17px' }} onClick={() => setIsEditing(false)}>Cancel</Button>
        </>
      ) : (
        <p>
          {comment.content} 
          <EditOutlined style={{marginLeft: '11px'}} onClick={() => setIsEditing(true)} />
          <DeleteOutlined style={{marginLeft: '7px'}} onClick={handleDeleteClick} />
        </p>
      )}
    </div>
    </div>
    </>
  );
}

export default Comment;