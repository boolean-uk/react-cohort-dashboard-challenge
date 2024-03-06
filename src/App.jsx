import { createContext } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import NavigationMenu from "./Components/NavigationMenu/NavigationMenu";
import PostFeed from "./Components/PostFeed/PostFeed";

import { Navigate, Route, Routes } from "react-router-dom";
import PostPage from "./Components/PostPage/PostPage";

export const PostsContext = createContext();

function App() {
  return (
    <>
      <Header></Header>
      <div className="main-content">
        <NavigationMenu></NavigationMenu>

        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<PostFeed />} />
          <Route path="/posts/:postId" element={<PostPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
