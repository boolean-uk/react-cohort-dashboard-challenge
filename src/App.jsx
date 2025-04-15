import { useState, useEffect } from "react";

import Header from "./components/ui/Header";
import Sidebar from "./components/ui/Sidebar";
import Dashboard from "./components/content/Dashboard";
import { getUserById } from "./util/api";
import { Route, Routes } from "react-router-dom";
import Post from "./components/content/Post";
import StylingProvider from "./components/StylingProvider";

function App() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    getUserById(1, setCurrentUser);
  }, []);

  if (!currentUser) {
    return <div>Loading...</div>; // or a loading spinner, or some placeholder content
  }

  return (
    <>
      <StylingProvider currentUser={currentUser}>
        <Header />
        <div className="main-layout">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/posts/:id" element={<Post />} />
              <Route path="/profile" element={<div>WIP</div>} />
            </Routes>
          </main>
        </div>
      </StylingProvider>
    </>
  );
}

export { App };
