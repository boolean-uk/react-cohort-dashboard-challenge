import { fetchComments, addComment, editPost, deleteComment } from '../api/axios'
import { SendOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import React, { useState, useEffect } from 'react'
import { Button, Input, Space } from 'antd'
import { useUser } from '../UserContext'
import { Link } from 'react-router-dom'
import Comment from './Comment'

function Post({ post, onDeletePost }) {


  // console.log('porttt',post)

  const { defaultUser } = useUser();


  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(post.content);
  const [showAllComments, setShowAllComments] = useState(false);

  const authorInitials = (name) => {
    const nameParts = name.split(' ');
    const initials = nameParts.map((part) => part.charAt(0));
    return initials.join('');
  };

  const handleDeleteClick = () => {
    onDeletePost(post.id);
  };

  useEffect(() => {
    fetchComments(post.id)
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  }, [post.id]);

  const handleCommentSubmit = () => {
    if (commentText.trim() === "") {
      return;
    }

    const addedComment = {
      postId: post.id,
      content: commentText,
      contactId: defaultUser.id,
      authorId: defaultUser.id,
      authorInitials: authorInitials(defaultUser.name),
      authorName: defaultUser.name,
    };

    addComment(post.id, addedComment)
      .then((response) => {
        console.log('New comment added:', response);
        setComments([response, ...comments]);
        setCommentText("");
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  };

  const handleDeleteComment = (commentId) => {
    console.log("Comment ID:", commentId);
    deleteComment(commentId)
      .then(() => {
        const updatedComments = comments.filter((comment) => comment.id !== commentId);
        setComments(updatedComments);
        console.log("Comment deleted successfully.");
      })
      .catch((error) => {
        console.error("Error deleting comment:", error);
      });
  };

  const handleEditPost = () => {
    if (editedText !== post.body) {
      const editedPost = {
        title: post.title,
        body: editedText,
        userId: post.userId,
        authorInitials: post.authorInitials,
        authorName: post.authorName,
      };

      editPost(post.id, editedPost)
        .then((response) => {
          console.log('Post edited successfully:', response);
          post.body = editedText;
          setIsEditing(false);
        })
        .catch((error) => {
          console.error("Error editing comment:", error);
        });
    }
  };

  return (
    <div className='card m-2 p-3'>
      <div className="post" style={{ display: 'flex', alignItems: 'center', marginBottom: '11px', marginTop: '7px',margin:10 }}>
        <Link to={`/profile/${post.contactId}`} state={{ post }}>
          <div className="author-initials">
            <p>{post.authorInitials}</p>
          </div>
        </Link>
        <div style={{ marginLeft: '11px' }}>
          <Link to={`/profile/${post.contactId}`} state={{ post }}>
            <h5>{post.authorName}</h5>
          </Link>
        </div>
      </div>
      <div className="post-details" style={{ flex: 1 }}>
        <Link to={`/posts/${post.id}`} state={{ post }}>
          <h5>{post.title}</h5>
        </Link>
      </div>
      <div className="post-details" style={{ flex: 1 }}>
        <div className="post-body">
          {isEditing ? (
            <>
              <Input style={{ backgroundColor: "#f0f0f0", color: "black", fontSize: "11px", borderRadius: "0" }}
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <Button type="text" style={{ backgroundColor: "#f0f0f0", color: "black", height: "30px", fontSize: "11px", fontWeight: "bold", borderRadius: "0", marginTop: '11px', marginBottom: '17px' }} onClick={handleEditPost}>Save</Button>
              <Button type="text" style={{ backgroundColor: "#ffffff", color: "black", height: "30px", fontSize: "11px", fontWeight: "bold", borderRadius: "0", marginTop: '11px', marginBottom: '17px' }} onClick={() => setIsEditing(false)}>Cancel</Button>
            </>
          ) : (
            <p>
              {post.content}
              <EditOutlined style={{ marginLeft: '11px' }} onClick={() => setIsEditing(true)} />
              <DeleteOutlined style={{ marginLeft: '7px' }} onClick={handleDeleteClick} />
            </p>
          )}
        </div>
      </div>
      <div className="post-comments">
        {comments.length > 3 && (
          <Button
            type="text"
            style={{
              backgroundColor: "#f3f3f3",
              color: "black",
              fontSize: "11px",
              fontWeight: 'bold',
              height: "30px",
              borderRadius: "0",
              marginBottom: '17px'
            }}
            onClick={() => setShowAllComments(!showAllComments)}
          >
            {showAllComments ? "Hide previous comments" : "See previous comments"}
          </Button>
        )}
        {showAllComments
          ? comments.map((comment) => (
            <Comment key={comment.id} comment={comment} post={post} onDeleteComment={handleDeleteComment} />
          ))
          : comments.slice(0, 3).map((comment) => (
            <Comment key={comment.id} comment={comment} post={post} onDeleteComment={handleDeleteComment} />
          ))}
      </div>
      <div className="comment-form">
        <Space.Compact style={{ width: '100%', marginBottom: '11px', marginTop: '7px' }}>
          <div className="author-initials" style={{ marginRight: '11px' }}>
            <p>{authorInitials(defaultUser.name)}</p>
          </div>
          <Input
            type="text"
            placeholder="Add a comment ..."
            style={{ backgroundColor: "#f3f3f3", borderRadius: "0", color: 'black', fontSize: '11px', height: '31px' }}
            bordered={false}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <Button
            type="text"
            focusable={false}
            onClick={handleCommentSubmit}
            style={{
              backgroundColor: "#f3f3f3",
              color: "black",
              fontSize: "11px",
              height: "31px",
              borderRadius: "0"
            }}
          >
            <SendOutlined />
          </Button>
        </Space.Compact>
      </div>
    </div>
  );
}

export default Post;