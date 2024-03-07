import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import TitleHeader from "./assets/title-header.svg";
import "./style/App.css";
import Home from "./Home";
import ProfileDetails from "./ProfileDetails";
import Sidebar from "./Sidebar";
import FullPost from "./FullPost";
import EditPost from "./EditPost";
const PostContext = createContext();
const ContactContext = createContext();
const ActiveContext = createContext();
const CommentContext = createContext();
function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [active, setActive] = useState({});
  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/sebbsoon/post")
      .then((response) => response.json())
      .then((item) => setPosts(item));
    fetch("https://boolean-api-server.fly.dev/sebbsoon/contact")
      .then((response) => response.json())
      .then((item) => setContacts(item));
    fetch("https://boolean-api-server.fly.dev/sebbsoon/contact/1")
      .then((response) => response.json())
      .then((item) => setActive(item));
  }, []);

  function createPost(post) {
    fetch("https://boolean-api-server.fly.dev/sebbsoon/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((item) => setPosts([...posts, item]));
  }
  function deletePost(postId) {
    fetch(`https://boolean-api-server.fly.dev/sebbsoon/post/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((item) => setPosts(posts.filter((p) => p.id !== item.id)));
  }

  function createComment(comment, postId) {
    fetch(
      `https://boolean-api-server.fly.dev/sebbsoon/post/${postId}/comment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      }
    )
      .then((response) => response.json())
      .then((item) => setComments([...comments, item]));
  }
  function deleteComment(postId, commentId) {
    fetch(
      `https://boolean-api-server.fly.dev/sebbsoon/post/${postId}/comment/${commentId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((item) => setComments(comments.filter((c) => c.id !== item.id)));
  }
  useEffect(() => {
    let newComments = [];
    const fetchComments = async () => {
      await Promise.all(
        posts.map(async (post) => {
          const response = await fetch(
            `https://boolean-api-server.fly.dev/sebbsoon/post/${post.id}/comment`
          );
          const comments = await response.json();
          newComments.push(...comments);
        })
      );
      setComments(newComments);
    };
    fetchComments();
  }, [posts]);

  useEffect(() => {
    console.log(comments);
  }, [comments]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    <>
      <PostContext.Provider value={{ posts, createPost, deletePost }}>
        <ContactContext.Provider value={{ contacts }}>
          <ActiveContext.Provider value={{ active }}>
            <CommentContext.Provider
              value={{ comments, createComment, deleteComment }}
            >
              <div className="app">
                <header className="header">
                  <img className="title-header" src={TitleHeader} />
                </header>
                <div className="body">
                  <div className="left-side">
                    <Sidebar />
                  </div>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/post/:postId" element={<FullPost />} />
                    <Route path={`/profile/:id`} element={<ProfileDetails />} />
                    <Route path={`/profile/:id/edit`} element={<EditPost/>}/>
                  </Routes>
                </div>
              </div>
            </CommentContext.Provider>
          </ActiveContext.Provider>
        </ContactContext.Provider>
      </PostContext.Provider>
    </>
  );
}

export { App, PostContext, ContactContext, ActiveContext, CommentContext };
