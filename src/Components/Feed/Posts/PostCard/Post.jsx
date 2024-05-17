import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UsersContext, PostsContext } from "../../../../App";
import Comment from "../../CommentSection/Comments";
import CommentForm from "../../CommentSection/CommentForm";
import Comments from "../../CommentSection/Comments";

export default function Post() {
  const { users, loggedInUser } = useContext(UsersContext);
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState([])
  

  const urlParams = useParams();
  const url = Number(urlParams.id);

  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/tzoltie/post/${url}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, [setPost]);

  if(!post) {
    return <p>Loading...</p>
  }
  const user = users.find((user) => {
    if (user.id === post.contactId) return user;
  });

  return (
    <ul className="post-background">
      <li className="post-container">
        <div className="post-header">
          {user && (
            <div
              className="profile-initials"
              style={{ backgroundColor: user.favouriteColour }}
            >
              <p className="initials">
                {user.firstName[0]}
                {user.lastName[0]}
              </p>
            </div>
          )}
          {user && (
            <div className="post-information">
              <p id="profile-name">
                {user.firstName} {user.lastName}
              </p>
              <p id="post-title">{post.title}</p>
            </div>
          )}
        </div>
        <div className="post-body">
          <p>{post.content}</p>
        </div>
        <div className="comment-section">
          <Comments post={post} comment={comment} setComment={setComment}/>
          <CommentForm loggedInUser={loggedInUser} post={post} comment={comment} setComment={setComment}/>
        </div>
      </li>
    </ul>
  );
}
