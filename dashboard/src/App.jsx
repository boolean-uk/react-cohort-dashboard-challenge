import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainBody from "./components/MainBody";

import DetailedPost from "./components/DetailedPost";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log(
      "Running my effect once, note: dependency array contains []..."
    );
    fetchPosts();
  }, []);

  function fetchPosts() {
    fetch(`https://boolean-api-server.fly.dev/jacobchenjensen/post`)
      .then((response) => response.json())
      .then((data) => {
        fetchComments(data)
          .then((postsWithComments) => {
            fetchAuthors(postsWithComments)
              .then((postsWithAuthors) => {
                postsWithAuthors.sort((a, b) => b.id - a.id);
                setPosts(postsWithAuthors);
              })
              .catch((error) => {
                console.error("Error fetching post authors:", error);
              });
          })
          .catch((error) => {
            console.error("Error fetching post comments:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching post list:", error);
      });
  }

  function fetchComments(posts) {
    const commentPromises = posts.map((post) => {
      return fetch(
        `https://boolean-api-server.fly.dev/jacobchenjensen/post/${post.id}/comment`
      )
        .then((response) => response.json())
        .then((data) => {
          const commentPromises = data.map((comment) => {
            return fetchAuthor(comment);
          });

          return Promise.all(commentPromises).then((commentsWithAuthors) => {
            post.comments = commentsWithAuthors;
          });
        });
    });

    return Promise.all(commentPromises).then(() => posts);
  }

  function fetchAuthors(data) {
    const authorPromises = data.map((item) => {
      return fetchAuthor(item);
    });

    return Promise.all(authorPromises);
  }

  function fetchAuthor(item) {
    return fetch(
      `https://boolean-api-server.fly.dev/jacobchenjensen/contact/${item.contactId}`
    )
      .then((response) => response.json())
      .then((data) => {
        item.author = data;
        return item;
      });
  }
  return (
    <div className="container">
      <Header />
      <div className="container-nav-main">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <MainBody
                posts={posts}
                setPosts={setPosts}
                fetchPosts={fetchPosts}
                fetchAuthor={fetchAuthor}
              />
            }
          />
          <Route
            path="/posts/:id"
            element={<DetailedPost posts={posts} fetchPosts={fetchPosts} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
