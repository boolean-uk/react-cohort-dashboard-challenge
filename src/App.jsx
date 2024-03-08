import { useState, useEffect, createContext } from "react";
import "./App.css";
import Feed from "./Feed";
import { Route, Routes, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Login from "./Login";
import ViewPost from "./Feed/Posts/Post/ViewPost";

const PostContext = createContext();
const UserContext = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      await getPostsFromAPI();
      await getUsersFromAPI();
    }
    fetchData();
  }, []);

  useEffect(() => {
    const loggedInUserId = localStorage.getItem("userId");
    if (loggedInUserId) {
      const foundUser = users.find((u) => u.id === parseInt(loggedInUserId));
      if (foundUser) {
        setLoggedInUser(foundUser);
        setLoading(false);
      } else {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, [users, navigate]);

  async function getPostsFromAPI() {
    try {
      const api = await fetch(
        "https://boolean-api-server.fly.dev/espensolhaug1/post"
      );
      const apiJson = await api.json();
      setPosts(apiJson.reverse());
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  async function getUsersFromAPI() {
    try {
      const api = await fetch(
        "https://boolean-api-server.fly.dev/espensolhaug1/contact"
      );
      const apiJson = await api.json();
      setUsers(apiJson);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  useEffect(() => {
    if (loading) {
      return;
    }
  }, [loading]);

  return (
    <>
      <UserContext.Provider
        value={{ users, setUsers, loggedInUser, setLoggedInUser }}
      >
        <PostContext.Provider value={{ posts, setPosts }}>
          <Routes>
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/post/:postId" element={<ViewPost />} />
          </Routes>
        </PostContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export { App, UserContext, PostContext };
