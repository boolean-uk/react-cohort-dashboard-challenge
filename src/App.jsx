import { useState, useEffect, createContext } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DisplayPost from "./components/DisplayPost";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ViewProfile from "./components/ViewProfile";

export const appContext = createContext();

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/zainabch123/post")
      .then((res) => res.json())
      .then((data) => setAllPosts(data));
  }, []);

  console.log("all posts:", allPosts);

  const sortedPosts = allPosts.sort((a, b) => (a.id > b.id ? -1 : 1));

  console.log("sorted Posts", sortedPosts);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/zainabch123/contact/1")
      .then((res) => res.json())
      .then((data) => setLoggedInUser(data));
  }, []);

  console.log("logged In User:", loggedInUser);

  
  return (
    <appContext.Provider
      value={{
        setLoggedInUser,
        loggedInUser,
        allPosts,
        setAllPosts,
        sortedPosts,
      }}
    >
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/post/:id" element={<DisplayPost />} />
        <Route path="/profile/:id" element= {<ViewProfile/>}/>
      </Routes>
    </appContext.Provider>
  );
}
