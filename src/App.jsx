import { createContext, useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Feed from "./Components/Feed/Feed";
import loggedInUser from "../src/assets/user";
import { Route, Routes } from "react-router-dom";
import Post from './Components/Feed/Posts/PostCard/Post';

export const UsersContext = createContext();
export const CommentsContext = createContext();
export const PostsContext = createContext()

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/tzoltie/contact")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, [setUsers]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/tzoltie/post")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, [setPosts]);

  return (
    <CommentsContext.Provider value={{comments, setComments}}>
      <PostsContext.Provider value={{posts, setPosts}}>
        <UsersContext.Provider value={{ users, loggedInUser }}>
          <section className="app-container">
            <Dashboard />

            <Routes>
              <Route path="/home" element={<Feed />} />
              <Route path="/post/:id" element={<Post />} />
            </Routes>
          </section>
        </UsersContext.Provider>
      </PostsContext.Provider>
    </CommentsContext.Provider>
    
  );
}

export default App;
