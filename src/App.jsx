import { useState, createContext } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import SideBar from "./Components/Sidebar";
import Profile from "./Components/Profile";
import MyPost from "./Components/MainComponents/EachPost.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const UserContents = createContext();

function App() {
  const [contactIdOne, setContactIdOne] = useState("");
  const [contents, setContents] = useState([]);
  const [rerenderPost, setRerenderPost] = useState(false);

  const [allContact, setAllContact] = useState([]);

  return (
    <UserContents.Provider
      value={{ contents, setContents, rerenderPost, setRerenderPost }}
    >
      <div className="main-app-template">
        <Header />
        <Routes>
          ...{" "}
          <Route
            path="/"
            element={
              <Main allContact={allContact} setAllContact={setAllContact} />
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
