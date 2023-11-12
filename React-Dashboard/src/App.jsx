import { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import SideBar from "./Components/Sidebar";
import Profile from "./Components/Profile";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [contactIdOne, setContactIdOne] = useState("");
  const [comment, setComment] = useState([]);
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
              comment={comment}
              setComment={setComment}
              allContact={allContact}
              setAllContact={setAllContact}
            />
          }
        />

        <Route path="/profile" element={<Profile />} />
      </Routes>

      <SideBar />
    </div>
  );
}

export default App;
