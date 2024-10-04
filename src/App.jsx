import { useState, createContext, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const PostContext = createContext();
const UserContext = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // Get posts
  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/badde00/post")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  // Get users
  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/badde00/contact")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        if (data.length > 0) {
          setCurrentUser(data[0]); // default user
        };
      });
  }, []);

  const findUser = (userId) => {
    return users.find(u => u.id === userId);
  };

  const findUserName = (userId) => {
    const user = findUser(userId);
    if (!user) return "Unknown User: " + userId;
    return `${user.firstName} ${user.lastName}`;
  };

  return (
    <>
      <UserContext.Provider value={{ users, currentUser, setCurrentUser, findUserName, findUser }}>
        <PostContext.Provider value={{ posts, setPosts }}>
          <Header />
          <Sidebar />
          <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
          </div>
        </PostContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export { App, PostContext, UserContext };




/*
name
```


```jsx

*/
