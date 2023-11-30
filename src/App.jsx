import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Header from "./Components/Header.jsx";
import Main from "./Components/Main.jsx";
import SideBar from "./Components/Sidebar.jsx";
import Profile from "./Components/Profile";
import MyPost from './Components/MainComponents/mypost.jsx';


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

        <Route path="/Profile" element={<Profile />} />
        <Route path="/myPost/:id" element={<MyPost />} />
      </Routes>

      <SideBar />
    </div>
  );
}

export default App;