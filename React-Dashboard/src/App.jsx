import { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import SideBar from "./Components/Sidebar";
import Profile from "./Components/Profile";
import MyPost from "./Components/MainComponents/MyPost.jsx";

import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [contactIdOne, setContactIdOne] = useState("");
  const [content, setContent] = useState([]);

  const [allContact, setAllContact] = useState([]);
  return (
    <div className="main-app-template">
      <Header contactIdOne={contactIdOne} setContactIdOne={setContactIdOne} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              contactIdOne={contactIdOne}
              setContactIdOne={setContactIdOne}
              content={content}
              setContent={setContent}
              allContact={allContact}
              setAllContact={setAllContact}
            />
          }
        />

        <Route path="/profile" element={<Profile />} />
        <Route path="/myPost/:id" element={<MyPost />} />
      </Routes>

      <SideBar />
    </div>
  );
}

export default App;
