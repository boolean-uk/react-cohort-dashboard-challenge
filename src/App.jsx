import { useState, useEffect, createContext } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard";

const API_URL = "https://boolean-api-server.fly.dev/ssuihko/";
const AppContext = createContext();

function App() {
  const [contacts, setContacts] = useState([]);
  const [user, SetUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [viewPost, setViewPost] = useState([]);
  const [viewFlag, setViewFlag] = useState(false);
  const [viewProfile, setViewProfile] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/profile")) {
      setViewProfile(true);
    }
    if (location.pathname === "/") {
      setViewFlag(false);
      setViewProfile(false);
    } else {
      setViewFlag(true);
    }
  }, [location.pathname, viewProfile]);

  // call data
  useState(() => {
    fetch(API_URL + "contact")
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
        console.log(data);
        SetUser(data[0]);
      });
  }, [user]);

  useEffect(() => {
    if (contacts.length > 0) {
      SetUser(contacts[0]);
    }
  }, [contacts]);

  useState(() => {
    fetch(API_URL + "post")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
      });
  }, []);

  const findPost = (id) => {
    setViewPost([]);
    const postById = posts.find((x) => parseInt(x.id) === parseInt(id));
    setViewPost([{ ...postById }]);
  };

  return (
    <div className="app-content">
      <AppContext.Provider
        value={{
          user: user,
          viewProfile: viewProfile,
          posts: viewFlag ? viewPost : posts,
          setPosts: setPosts,
          contacts: contacts,
          setContacts: setContacts,
          findPost: findPost,
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile/:id" element={<Dashboard />} />
          <Route path="/post/:id" element={<Dashboard />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export { App as default, AppContext };
