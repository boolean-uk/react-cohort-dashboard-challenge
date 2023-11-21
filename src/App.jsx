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
    <div className="main-app-template">
      <Header contactIdOne={contactIdOne} setContactIdOne={setContactIdOne} />
      <UserContents.Provider value={{ contents, setContents }}>
        <Routes>
          ...{" "}
          <Route
            path="/"
            element={
              <UserContents.Provider value={{ contents, setContents }}>
                <Main
                  contactIdOne={contactIdOne}
                  setContactIdOne={setContactIdOne}
                  contents={contents}
                  setContents={setContents}
                  allContact={allContact}
                  setAllContact={setAllContact}
                />
              </UserContents.Provider>
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myPost/:id" element={<MyPost />} />
        </Routes>
      </UserContents.Provider>
      <SideBar />
    </div>
  );
}

export { App, UserContents };
