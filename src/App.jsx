// App.js
import { useState, useEffect, createContext} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'; // Import your custom CSS file
import Nav from "./components/Nav";
import Feed from "./components/Feed";
import Post from "./components/Post";
import Header from "./components/Header";
import ProfileView from "./components/ProfileView";

import { getContacts, getAllPosts } from "./api";

const MainContext = createContext();

function App() {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        getAllPosts().then((data) => setPosts(data.reverse()));
    };

    const getMainContact = () => {
        getContacts(3).then((data) => setUser(data));
    };

    useEffect(() => {
        getMainContact();
        getPosts();
    }, []);
  return (
    <MainContext.Provider
            value={{
                user: user,
                posts: posts,
                getPosts: getPosts,
            }}>
      <BrowserRouter>
        <div className="container">
          <Header />
          <main className="container-nav-main">
            <div className="sidebar">
              <Nav />
            </div>
            <div className="main">
              <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/post/:postId" element={<Post />} />
                <Route path="/profile" element={<ProfileView />} />
              </Routes>
            </div>
          </main>
        </div>
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export{App, MainContext};
