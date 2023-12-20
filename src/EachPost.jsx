import { useState, useEffect } from "react";
import AddComment from "./AddComment";
import Comments from "./Comments";
import { Link } from "react-router-dom";

import "./eachPost.css";
const EachPost = ({ loggedInUser, post }) => {
  const [comments, setComments] = useState([]);
  const [commentsInfo, setCommentsInfo] = useState([]);
  const [user, setUser] = useState([]);
  const fetchDataById = () => {
    fetch(
      `https://boolean-api-server.fly.dev/hamza789987/contact/${post.contactId}`
    )
      .then((res) => res.json())
      .then((data) => setUser(data));
  };
  useEffect(fetchDataById, []);

  //
  const getComments = () => {
    fetch(
      `https://boolean-api-server.fly.dev/hamza789987/post/${post.id}/comment`
    )
      .then((res) => res.json())
      .then((data) => setComments(data));
  };
  const getCommentsInfo = () => {
    // const promises = [];
    // for (let i = 0; i < comments.length; i++) {
    fetch(`https://boolean-api-server.fly.dev/hamza789987/contact/`)
      .then((res) => res.json())
      .then((data) => setCommentsInfo([...data]));
    //   promises.push(promise);
    //   }
    // Promise.all(promises);
  };
  useEffect(getComments, []);
  useEffect(getCommentsInfo, [comments]);
  //
  return (
    <div className='eachPostContainer'>
      <div
        className={`otherInitials ${post.contactId === 1 ? "mine" : "other"}`}>
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
      <Link to={`/specificPost/${post.id}`}>
        <div className='postTitle'>{post.title}</div>
      </Link>
      <div className='postContent'> {post.content} </div>
      <Comments
        loggedInUser={loggedInUser}
        user={user}
        post={post}
        getCommentsInfo={getCommentsInfo}
        getComments={getComments}
        comments={comments}
        commentsInfo={commentsInfo}
      />

      <AddComment
        getComments={getComments}
        // setComments={setComments}
        post={post}
        loggedInUser={loggedInUser}
      />
    </div>
  );
};

export default EachPost;
