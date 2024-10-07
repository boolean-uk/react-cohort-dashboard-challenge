import { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import LeftMenueComponent from "./Components/LeftMenueComponent";
import HomeComponent from "./Components/HomeComponent";
import ProfileComponent from "./Components/ProfileComponent"; 

const PostContext = createContext();
const ContactContext = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  const [contacts, setContacts] = useState([]);

  const ContactsURL =
    "https://boolean-uk-api-server.fly.dev/victorscodeingcorner/contact";
  const PostURL =
    "https://boolean-uk-api-server.fly.dev/victorscodeingcorner/post";

  const fetchPosts = async () => {
    const response = await fetch(PostURL);
    const jsonData = await response.json();
    setPosts(jsonData);
  };

  const fetchContacts = async () => {
    const response = await fetch(ContactsURL);
    const jsonData = await response.json();
    setContacts(jsonData);
  };

  useEffect(() => {
    fetchPosts();
    fetchContacts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      <ContactContext.Provider value={{ contacts, setContacts }}>
          <div className="app-layout">
            <HeaderComponent />
            <LeftMenueComponent />
            <div className="main-content">
              <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/profile" element={<ProfileComponent />} />
              </Routes>
            </div>
          </div>
      </ContactContext.Provider>
    </PostContext.Provider>
  );
}

export { App, PostContext, ContactContext };
