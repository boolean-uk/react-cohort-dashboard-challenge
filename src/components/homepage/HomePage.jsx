import { useEffect } from "react";
import "../../../src/App.css";
import { useState } from "react";
import Header from "../header/header";
import Main from "../main/main";
import { useNavigate } from "react-router-dom";

export const HomePage = ({ currentUser, contacts, comments, posts }) => {
  const postUrl = "https://boolean-uk-api-server.fly.dev/fbagdeli/post";

  const [NewTitlePost, setNewTitlePost] = useState({});
  const [isFormVisible, setFormVisible] = useState(false);
  const [newContentPost, setNewContentPost] = useState(null);
  const [commentInput, setCommentInput] = useState(null);

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };
  const navigate = useNavigate();

  const newPostHandleButton = (event) => {
    event.preventDefault();
    setFormVisible(!isFormVisible);
    fetch(postUrl, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        title: NewTitlePost,
        content: newContentPost,
        contactId: currentUser.id,
      }),
    });
  };

  const handleTitleInput = (event) => {
    const title = event.target.value;
    setNewTitlePost(title);
  };

  const handleContentInput = (event) => {
    const content = event.target.value;
    setNewContentPost(content);
  };

  const commentInputHandler = (event) => {
    const textComment = event.target.value;
    setCommentInput(textComment);
  };

  const newCommentButton = ({ id }) => {
    fetch(`${postUrl}/${id}/comment`, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        postId: id,
        content: commentInput,
        contactId: currentUser.id,
      }),
    });
  };

  const openPostHandler = (post, comments, contacts) => {
    const url = `/${post.id}`;
    navigate(url, {
      state: {
        post,
        comments,
        contacts
      }
    });
  };
  return (
    <div className="homePage">
      <Header currentUser={currentUser} />
      <Main
        handleContentInput={handleContentInput}
        isFormVisible={isFormVisible}
        toggleFormVisibility={toggleFormVisibility}
        handleTitleInput={handleTitleInput}
        newPostHandleButton={newPostHandleButton}
        currentUser={currentUser}
        posts={posts}
        contacts={contacts}
        comments={comments}
        commentInputHandler={commentInputHandler}
        newCommentButton={newCommentButton}
        openPostHandler={openPostHandler}
      />
    </div>
  );
};
