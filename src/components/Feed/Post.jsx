/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import "../Feed/Post.css";
import Comment from "../Feed/Comment";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../../App";
import { CreatePostComment, DeletePost, GetPostComments } from "../../PostAPIs/PostAPI";
import { Link } from "react-router-dom";

export default function Post({post}) {
    const { authors, username, loggedInUser } = useContext(PostContext);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({
      postId: post.id,
      content: "",
      contactId: loggedInUser.id,
    });
    const [showAllComments, setShowAllComments] = useState(false);
    const [isAuthor, setIsAuthor] = useState(false);
    const [shouldFetchComments, setShouldFetchComments] = useState(false);
    
    const author = authors.find((a) => a.id === post.contactId);

    if (author === undefined) {
      return;
    }

    useEffect(() => {
      if (loggedInUser.id === post.contactId) {
        setIsAuthor(true);
      } else {
        setIsAuthor(false);
      }
    }, [loggedInUser.id, post.contactId]);

    const fetchAllComments = async () => {
    try {
      const result = await GetPostComments(username, post.id);
      setComments(result);
    } catch (error) {
      console.error("Error while fetching all comments!" + error);
      }
    }

    const handleChange = (event) => {
      const {name, value} = event.target;
      setNewComment((prev) => ({...prev, [name] : value}));
    }

    const handleSubmitComment = async () => {
      try {
        const result = await CreatePostComment(username, post.id, newComment);
        setComments([...comments, result]);
        setNewComment({content: ""});
        
      } catch (error) {
        console.error("Error while adding a new comment: " + error);
      }
    }
  
    const handleDeletePost = async () => {
      try{
        await DeletePost(username, post.id);
      } catch (error) {
        console.error("Error in deleting a post: " + error);
      }
    }

    useEffect(() => {
      fetchAllComments();
    },[shouldFetchComments]);

    useEffect(() => {
      if (shouldFetchComments) {
        fetchAllComments();
        setShouldFetchComments(false); // Reset to false after fetching
      }
    }, [shouldFetchComments]);

    const visibleComments = showAllComments ? comments : comments.slice(0, 3);


    if (!comments) {
      return <p>Loading Comments....</p>
    }

    return (
        <div className="post-card">
          <div className="post-header">
          <Link to={`/profile/${author.id}`}>
            <div className="post-image" style={{backgroundColor: author.favouriteColour}}>
              <p className="initials">{author.firstName.charAt(0)}{author.lastName.charAt(0)}</p>
            </div>
            </Link>
            <div className="title-name-container">
              <p className="post-header-name">{author.firstName} {author.lastName}</p>
              <Link to={`/post/${post.id}`} className="post-header-title">
                {post.title}
              </Link>
            </div>
            </div>
            <div className="post-content">
              <p className="post-message">{post.content}</p>
          </div>
          <hr className="post-divider2" />
         
          <div className="post-comments">
          {comments.length > 3 && (
          <p
            onClick={() => setShowAllComments((prev) => !prev)}
            className="show-comments-text"
          >
            {showAllComments ? "Show less comments" : "See previous comments"}
          </p>
        )}
            {visibleComments.map((comment, index) => (
              <Comment key={index} comment={comment} postid={post.id}
              setShouldFetchComments={setShouldFetchComments}/>
            ))}
            <div className="comment-section">
              <div className="newcomment-image" style={{backgroundColor: loggedInUser.favouriteColour}}>
              <p className="initials">{loggedInUser.firstName.charAt(0)}{loggedInUser.lastName.charAt(0)}</p>
              </div>
              <input
                type="text"
                placeholder="Write a comment..."
                name="content"
                value={newComment.content}
                onChange={handleChange}
                className="comment-input"
              />
              <button onClick={handleSubmitComment} className="comment-button">Post</button>
            </div>
              {isAuthor ? (<button className="delete-post-button" onClick={handleDeletePost}>Delete Post</button>) : ("")}
          </div>
        </div>
      );
}