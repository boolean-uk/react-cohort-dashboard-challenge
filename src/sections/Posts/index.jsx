import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import Comment from "../Comments";
import CreateComment from "../Comments/components/CreateComment";
import { useNavigate } from "react-router-dom";
import "./Post.css";

export const Post = (props) => {
  const { users } = useContext(UserContext);
  const { post } = props;

  const [comments, setComments] = useState([]);

  const [user, setUser] = useState();
  const Navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://boolean-uk-api-server.fly.dev/h602121/post/" +
        post.id.toString() +
        "/comment"
    )
      .then((res) => {
        return res.json();
      })
      .then((x) => {
        setComments(x);
      });
  }, []);

  useEffect(() => {
    const foundUser = users.find((x) => x.id === post.contactId);
    setUser(foundUser);
  }, []);

  return (
    <>
      <div className="post-container">
        <div className="post-header">
          <div className="avatar">
            {user?.firstName[0]}
            {user?.lastName[0]}
          </div>
          <div>
            <h3 className="username">
              {user?.firstName + " " + user?.lastName}
            </h3>

            <p
              className="post-title"
              onClick={() => Navigate("/feed/post/" + post.id.toString())}
            >
              {post.title}
            </p>
          </div>
        </div>
        <div className="post-content">
          <p>{post.content}</p>
        </div>
        <hr className="divider"></hr>
        <div className="comments-section">
          {comments.map((comment) => (
            <Comment comment={comment} users={users} key={comment.id}></Comment>
          ))}
          <CreateComment
            postId={post.id}
            comments={comments}
            setComments={setComments}
          ></CreateComment>
        </div>
        <hr className="divider"></hr>
      </div>
    </>
  );
};

export default Post;
