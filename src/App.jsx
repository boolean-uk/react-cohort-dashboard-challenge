import { useState, createContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

const UserContext = createContext();
const PostContext = createContext();

function App() {
  const [activeUser, setActiveUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://boolean-api-server.fly.dev/AlexanderNiklasson/contact")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setActiveUser(data[15]);
      });
    fetch("https://boolean-api-server.fly.dev/AlexanderNiklasson/post")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .finally(() => setIsLoading(false)); // Set loading to false after fetching data
  }, []);

  // Return JSX with Spinner component when loading
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <UserContext.Provider
      value={{
        activeUser: activeUser,
        setActiveUser: setActiveUser,
        users: users,
        setUsers: setUsers,
      }}>
      <PostContext.Provider value={{ posts: posts, setPosts: setPosts }}>
        <Header />
        <SideNav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/post/:id" element={<Dashboard />} />
        </Routes>
      </PostContext.Provider>
    </UserContext.Provider>
  );
}

export { App, UserContext, PostContext };
