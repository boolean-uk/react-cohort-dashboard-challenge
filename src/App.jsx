import { createContext } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import NavigationMenu from "./Components/NavigationMenu/NavigationMenu";
import PostFeed from "./Components/PostFeed/PostFeed";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

export const PostsContext = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  return (
    <>
      <Header></Header>
      <div className="main-content">
        <NavigationMenu></NavigationMenu>
        <PostsContext.Provider value={{ posts: posts, setPosts: setPosts }}>
          <Routes>
            <Route path="/" element={<PostFeed />} />
          </Routes>
        </PostsContext.Provider>
      </div>
    </>
  );
}

export default App;
