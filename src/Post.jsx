import { useContext, createContext, useState } from "react";
import "./Post.css";
import Propic from "./Propic";
import AddComment from "./AddComment";
import Comments from "./Comments";
import { Context } from "./App";
import { Link } from "react-router-dom";

export const NewCommentContext = createContext();

export default function Post({ posterId, postTitle, postText, postId }) {
  const [isNewComment, setNewComment] = useState(false);
  const [currentUser, contacts] = useContext(Context);

  let currentContact = {};

  if (posterId == 0) {
    currentContact = currentUser;
  } else {
    currentContact = contacts.find((target) => target.id === posterId);
  }

  return (
    <div className="post">
      <Propic contact={currentContact} />
      <div className="name-and-title">
        <h3>
          {currentContact.firstName} {currentContact.lastName}
        </h3>
        <Link to={`/post/${postId}`}>
          <h4>{postTitle}</h4>
        </Link>
      </div>
      <div className="post-text">
        <p>{postText}</p>
      </div>
      <NewCommentContext.Provider value={[isNewComment, setNewComment]}>
        <Comments postId={postId} />
        <AddComment postId={postId} />
      </NewCommentContext.Provider>
    </div>
  );
}
