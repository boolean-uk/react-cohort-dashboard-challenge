import { useState, useEffect, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard";
// import user from "./assets/data/user";
import Profile from "./components/Profile";

const API_URL = "https://boolean-api-server.fly.dev/ssuihko/";
const AppContext = createContext();

function App() {
  const [contacts, setContacts] = useState([]);
  const [user, SetUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [viewPost, setViewPost] = useState([]);
  const [viewFlag, setViewFlag] = useState(false);
  const [viewProfile, setViewProfile] = useState(false);

  const navigate = useNavigate();
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
      // setViewProfile(false);
    }
  }, [location.pathname, viewProfile]);

  console.log("app viewPforile: ", viewProfile);
  // call data
  useState(() => {
    fetch(API_URL + "contact")
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
        SetUser(data[0]);
        console.log(data);
      });
  }, []);

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
