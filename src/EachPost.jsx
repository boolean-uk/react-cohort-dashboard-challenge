import { useState, useEffect } from "react";
import AddComment from "./AddComment";
import { Routes, Route, Link } from "react-router-dom";
import "./eachPost.css";
const EachPost = ({ loggedInUser, post }) => {
  const [user, setUser] = useState([]);
  const fetchDataById = () => {
    fetch(`https://boolean-api-server.fly.dev/hamza789987/contact/${post.id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  };
  useEffect(fetchDataById, []);
  // console.log(user, post);

  return (
    <div className='eachPostContainer'>
      <div className='otherInitials'>
        {/* {user.firstName[0]}
        {user.lastName[0]} If users is undefined on first page load (until the fetch request has finished) then you can't access properties of an object that does not exist.They are handling it with the if or && type approaches*/}
        {user.firstName && user.lastName && (
          <>
            {user.firstName[0]}
            {user.lastName[0]}
          </>
        )}
      </div>
      <div className='postName'>
        {/* {user.firstName}
        {user.lastName} */}
        {user.firstName && user.lastName && (
          <>
            {user.firstName} {user.lastName}
          </>
        )}
      </div>

      <div className='postTitle'>{post.title}</div>
      <div className='postContent'> {post.content} </div>
      <hr />
      <hr />
      <AddComment loggedInUser={loggedInUser} />
    </div>
  );
};

export default EachPost;
