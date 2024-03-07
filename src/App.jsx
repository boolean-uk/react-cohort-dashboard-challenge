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
    favouriteColour: ""
  });

  useEffect(() => {
    fetchPosts();
    setUser(loggedInUser.id)
  }, []);

  const setUser = async (id) => {
    fetchUser(id).then((data) => {
      setLoggedInUser(data)
    })
  }

  const deletePost = async (postId) => {
    fetch(`https://boolean-api-server.fly.dev/Eliassoprani/post/${postId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete post');
        }
        fetchPosts();
      })
      .catch(error => {
        console.error('Error deleting post:', error);
      });
  }

  const fetchUser = async (userId) => {
    try {
      const response = await fetch(
        `https://boolean-api-server.fly.dev/Eliassoprani/contact/${userId}`
      );
      const data = await response.json();
      return ({
        id: data.id,
        name: data.firstName + " " + data.lastName,
        favouriteColour: data.favouriteColour
      })
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://boolean-api-server.fly.dev/Eliassoprani/post"
      );
      const data = await response.json();
      const reversedData = data.reverse();
      setPosts([...reversedData]);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const newPost = async (obj) => {
    setPosts((prevPosts) => [...prevPosts, obj].reverse());
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
              setPosts: newPost,
              fetchPosts: fetchPosts,
              loggedInUser: loggedInUser,
              fetchUser: fetchUser,
              deletePost: deletePost
            }}
          >
            <Routes>
              <Route path="/" element={<Posts />} />
            </Routes>
          </AppContext.Provider>
        </div>
      </div>
    </>
  );
}
