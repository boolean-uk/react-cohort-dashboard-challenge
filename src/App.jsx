import { useState, createContext, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Posts from "./Components/Posts";
import Header from "./Components/Header";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext();
import Profile from "./Components/Profile";
import SideBar from "./Components/SideBar";
export function App() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
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

  const navigateSingle = (postId) => {
    navigate(`/${postId}`);
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

  const deleteComment = async (postId, commentId) => {
    fetch(
      `https://boolean-api-server.fly.dev/Eliassoprani/post/${postId}/comment/${commentId}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete comment");
        }
        //setPosts(posts.filter((post) => post.id !== postId));
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
      const { id, ...rest } = data;
      return {
        id,
        name: data.firstName + " " + data.lastName,
        ...rest,
      };
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <>
      <div className="container">
        <AppContext.Provider
          value={{
            posts: posts,
            setPosts: setPosts,
            loggedInUser: loggedInUser,
            fetchUser: fetchUser,
            deletePost: deletePost,
            navigateSingle: navigateSingle,
            deleteComment: deleteComment,
          }}
        >
          <header className="header">
            <Header />
          </header>
          <div className="sidebar">
            <SideBar />
          </div>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Posts />} />
              <Route path="/:id" element={<Posts />} />
              <Route path="/profile/:id" element={<Profile />} />
            </Routes>
          </div>
        </AppContext.Provider>
      </div>
    </>
  );
}
