import { createContext, useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PostDetails from "./components/PostDetails";

const AppContext = createContext();
const UserContext = createContext();
const UserCommentContext = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://boolean-api-server.fly.dev/hannapham1007/post")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })

      .catch((error) => console.error("Error fetching data:", error));
  };

  const fetchUserData = () => {
    fetch("https://boolean-api-server.fly.dev/hannapham1007/contact/3")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })

      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchData();
    fetchUserData();
  }, []);


  return (
    <div className="container">
      <AppContext.Provider
        value={{
          posts: posts,
          setPosts: setPosts,
          comments: comments,
          setComments: setComments,
        }}
      >
        <UserContext.Provider value={{ users: users, setUsers: setUsers }}>

            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/post/:id" element={<PostDetails />}></Route>
            </Routes>
        </UserContext.Provider>
      </AppContext.Provider>
    </div>
  );
}

export { AppContext, UserContext, UserCommentContext, App };
