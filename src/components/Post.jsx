import { useState, useEffect, useContext } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { MyContext } from "../App";
import CreateComment from "./CreateComment";
import DisplayPost from "./DisplayPost";

export default function Post({ post }) {
  const {contacts} = useContext(MyContext);
  const [comments, setComments] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);
  const [commentUsers, setCommentUsers] = useState([]);

  const postAuthor = () => {
   
    const author = contacts.find((contact) => contact.id === post.contactId);
    return author || {}; 
  };

  const commentAuthors = () => {
    return comments.map((comment) => {
      const author = contacts.find((contact) => contact.id === comment.contactId);
      return author || {};
    });
  };
  
  const poster = postAuthor()

  const commenters = commentAuthors()

  const getInitials = (user) => {
    if (user) {
      const firstName = user.firstName || '';
      const lastName = user.lastName || '';
      return `${firstName.charAt(0)}${lastName.charAt(0)}`;
    }
    return '';
  };

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }




  useEffect(() => {
    const fetchData = () => {
      fetch(`https://boolean-api-server.fly.dev/hassanhussa1n/post/${post.id}/comment`)
        .then((response) => response.json())
        .then((data) => {
          setComments(data);
        });
    };

    fetchData();
  }, [post.id]);

  const displayedComments = showAllComments ? comments : comments.slice(0, 3);

  return (
    <>
      <div className="profile-circle" style={{ backgroundColor: getRandomColor() }}>
        {getInitials(poster)}
      </div>
      <h3>{postAuthor().firstName} {postAuthor().lastName}</h3>
      <Link to={`/posts/${post.id}`} className="post-title-link">
        <h5>{post.title}</h5>
      </Link>
      <p>{post.content}</p>
      <p>Add Comment: </p>
      <CreateComment postId={post.id} comments={comments} setComments={setComments}/>
      <h4>Comments</h4>
      {displayedComments.map((comment, index) => (
  <div className="comment" key={comment.id}>
    <div className="profile-circle" style={{ backgroundColor: getRandomColor() }}>
            {getInitials(commenters[index])}
          </div>
    <h6>{commentAuthors()[index].firstName} {commentAuthors()[index].lastName}</h6>
    <p>{comment.content}</p>
    {commentUsers[index] && (
      <div className="profile-icon">{commentUsers[index].initials}</div>
    )}
  </div>
))}
  
   
  

      {!showAllComments && comments.length > 3 && (
        <button className="show-all-button" onClick={() => setShowAllComments(true)}>
          See All
        </button>
      )}
    </>
  );
}
