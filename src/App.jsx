import { useState, createContext, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Posts from "./Components/Posts";
import Header from "./Components/Header";

export const AppContext = createContext();

export function App() {
  const [posts, setPosts] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({
    id: 12,
    name: "",
    favouriteColour: "",
  });

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/Eliassoprani/post")
      .then((response) => response.json())
      .then((data) => {
        setPosts([...data].reverse());
      });
    setUser(loggedInUser.id);
  }, []);

  const setUser = async (id) => {
    fetchUser(id).then((data) => {
      setLoggedInUser(data);
    });
  };

  const deletePost = async (postId) => {
    fetch(`https://boolean-api-server.fly.dev/Eliassoprani/post/${postId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete post");
        }
        setPosts(posts.filter((post) => post.id !== postId));
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  const fetchUser = async (userId) => {
    try {
      const response = await fetch(
        `https://boolean-api-server.fly.dev/Eliassoprani/contact/${userId}`
      );
      const data = await response.json();
      return {
        id: data.id,
        name: data.firstName + " " + data.lastName,
        favouriteColour: data.favouriteColour,
      };
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <>
      <div className="container">
        <header className="header">
          <Header />
        </header>
        <div className="sidebar">Sidebar</div>
        <div className="main-content">
          <AppContext.Provider
            value={{
              posts: posts,
              setPosts: setPosts,
              loggedInUser: loggedInUser,
              fetchUser: fetchUser,
              deletePost: deletePost,
            }}>
            <Routes>
              <Route path="/" element={<Posts />} />
            </Routes>
          </AppContext.Provider>
        </div>
      </div>
    </>
  );
}
