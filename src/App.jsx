import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import Body from "./components/Body/Body";
import { createContext, useState } from "react";

const PostContext = createContext();

function App() {
  const [posts, setPosts] = useState([{ title: "", content: "" }]);
  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      <div className="box">
        <Header />
        <div className="box-nav-main">
          <SideBar />
          <Body />
        </div>
      </div>
    </PostContext.Provider>
  );
}
export default App;
export { PostContext };
