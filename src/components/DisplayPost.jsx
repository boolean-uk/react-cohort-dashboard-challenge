import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../App";
import { useParams } from "react-router-dom";
import CreateComment from "./CreateComment";

const DisplayPost = () => {
  const { posts, getRandomColor, contacts } = useContext(MyContext);
  const [comments, setComments] = useState([]);
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (posts && postId) {
      const matchingPost = posts.find((post) => post.id === parseInt(postId));
      setPost(matchingPost);
    }

    if (postId) {
      fetch(`https://boolean-api-server.fly.dev/hassanhussa1n/post/${postId}/comment`)
        .then((response) => response.json())
        .then((data) => {
          setComments(data);
        });
    }
  }, [posts, postId]);

  const getInitials = (user) => {
    if (user) {
      const firstName = user.firstName || "";
      const lastName = user.lastName || "";
      return `${firstName.charAt(0)}${lastName.charAt(0)}`;
    }
    return "";
  };

  const postAuthor = () => {
    const author = post ? contacts.find((contact) => contact.id === post.contactId) : null;
    return author || {};
  };

  const commentAuthors = () => {
    return comments.map((comment) => {
      const author = contacts.find((contact) => contact.id === comment.contactId);
      return author || {};
    });
  };

  const poster = postAuthor();
  const commenters = commentAuthors();

  console.log(post);

  const postCardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px 0",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const commentCardStyle = {
    marginTop: "16px",
    padding: "16px",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
  };

  const commentStyle = {
    backgroundColor: "#fff",
    padding: "8px",
    margin: "8px 0",
    borderRadius: "8px",
  };

  return (
    <>
      <div className="commentcard" style={commentCardStyle}>
        <div className="postcard" style={postCardStyle}>
          <div className="profile-circle" style={{ backgroundColor: getRandomColor() }}>
            {getInitials(poster)}
          </div>
          <h3>{postAuthor().firstName} {postAuthor().lastName}</h3>
          {post && (
            <>
              <h5>{post.title}</h5>
              <p>{post.content}</p>
            </>
          )}
          <p>Add Comment: </p>
        </div>
        <div>
          <CreateComment postId={post?.id} comments={comments} setComments={setComments} />
        </div>
        <h4>Comments</h4>
        {comments.map((comment, index) => (
          <div className="comment" style={commentStyle} key={comment.id}>
            <div className="profile-circle" style={{ backgroundColor: getRandomColor() }}>
              {getInitials(commenters[index])}
            </div>
            <h6>{commentAuthors()[index].firstName} {commentAuthors()[index].lastName}</h6>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayPost;
