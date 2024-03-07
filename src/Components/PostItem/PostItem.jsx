import { createContext, useContext, useEffect, useState } from "react";
import "./PostItem.css";
import * as API from "../../API/API";

import OriginalPost from "./OriginalPost/OriginalPost";
import PostCommentList from "./PostCommentList/PostCommentList";
import CreateComment from "./CreateComment/CreateComment";
import { UserContext } from "../../App";

export const PostContext = createContext();
function PostItem(props) {
  const [post, setPost] = useState(props.post);
  const [comments, setComments] = useState([]);
  const [postUser, setPostUser] = useState("");

  const updatePost = () => {
    API.getPostById(post.id)
      .then((res) => res.json())
      .then((postData) => {
        // console.log(userData);
        setPost(postData);
      });
  };

  const getUser = () => {
    API.getUserById(post.contactId)
      .then((res) => res.json())
      .then((userData) => {
        // console.log(userData);
        setPostUser(userData);
      });
  };
  const updateComments = () => {
    API.getCommentForPost(post.id)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setComments(data);
      });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getUser(), []);
  useEffect(() => updateComments(), []);

  return (
    <PostContext.Provider
      value={{
        post: post,
        originalPostUser: postUser,
        comments: comments,
        updatePost: updatePost,
        updateComments: updateComments,
      }}
    >
      <div id={post.id} className="feed-item">
        <OriginalPost />
        <PostCommentList />
        <CreateComment />
      </div>
    </PostContext.Provider>
  );
}

export default PostItem;
