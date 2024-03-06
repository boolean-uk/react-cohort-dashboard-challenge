import { createContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import NavigationMenu from "./Components/NavigationMenu/NavigationMenu";
import PostFeed from "./Components/PostFeed/PostFeed";

import { Navigate, Route, Routes } from "react-router-dom";
import PostPage from "./Components/PostPage/PostPage";
import * as API from "./API/API";
import ProfilePage from "./Components/ProfilePage/ProfilePage";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  function getUser(id = 1) {
    API.getUserById(id)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }

  useEffect(() => getUser(), []);

  return (
    <>
      <UserContext.Provider
        value={{ user: user, setUser: setUser, getUser: getUser }}
      >
        <Header></Header>
        <div className="page-body">
          <NavigationMenu />
          <div className="main-content-scrollable">
            <Routes>
              <Route path="/" element={<Navigate to="/posts" />} />
              <Route path="/posts" element={<PostFeed />} />
              <Route path="/posts/:postId" element={<PostPage />} />
              <Route path="/profile" element={<Navigate to="/profile/1" />} />
              <Route path="/profile/:userId" element={<ProfilePage />} />
            </Routes>
          </div>
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
