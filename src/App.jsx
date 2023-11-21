import { useState, createContext } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import SideBar from "./Components/Sidebar";
import Profile from "./Components/Profile";
import MyPost from "./Components/MainComponents/MyPost.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const UserContents = createContext();

function App() {
  const [contactIdOne, setContactIdOne] = useState("");
  const [contents, setContents] = useState([]);

  const [allContact, setAllContact] = useState([]);

  return (
    <UserContents.Provider value={{ contents, setContents }}>
      <div className="main-app-template">
        <Header contactIdOne={contactIdOne} setContactIdOne={setContactIdOne} />
        <Routes>
          ...{" "}
          <Route
            path="/"
            element={
              <Main
                contactIdOne={contactIdOne}
                setContactIdOne={setContactIdOne}
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
    </UserContents.Provider>
  );
}

export { App, UserContents };
