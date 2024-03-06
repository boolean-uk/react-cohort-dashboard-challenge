import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import Body from "./components/Body/Body";
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import SinglePost from "./components/Body/Post/SinglePost";

const PostContext = createContext();

function App() {
  const [posts, setPosts] = useState([{ title: "", content: "" }]);
  return (
    <BrowserRouter>
      <PostContext.Provider value={{ posts, setPosts }}>
        <div className="box">
          <Header />
          <div className="box-nav-main">
            <SideBar />
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/post/:id" element={<SinglePost posts={posts} />} />
            </Routes>
          </div>
        </div>
      </PostContext.Provider>
    </BrowserRouter>
  );
}
export default App;
export { PostContext };
