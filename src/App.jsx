import { NavLink, Routes, Route, Link } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import Avatar from "./components/Avatar";
import PostFeed from "./components/PostFeed";
import Profile from "./components/Profile";
import ClickedPost from "./components/ClickedPost";

function getClassName({ isActive }) {
  if (isActive) {
    return "active";
  }
}

export const DataContext = createContext();

export default function App() {
  const [posts, setPosts] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(getItem);

  const mode = isDark ? "dark" : "light";

  useEffect(() => {
    localStorage.setItem("isDark", isDark);
  }, [isDark]);

  function getItem() {
    return localStorage.getItem("isDark") === "true";
  }

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/Hamada-AB/contact")
      .then((response) => response.json())
      .then((data) => {
        if (data && !data.error) {
          setContacts(data);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });

    fetch("https://boolean-api-server.fly.dev/Hamada-AB/contact/1")
      .then((response) => response.json())
      .then((data) => {
        if (data && !data.error) {
          setUser(data);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });

    fetch("https://boolean-api-server.fly.dev/Hamada-AB/post")
      .then((response) => response.json())
      .then((data) => {
        if (data && !data.error) {
          setPosts(data);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const value = {
    posts,
    setPosts,
    contacts,
    setContacts,
    user,
    isLoading,
    setIsLoading,
    mode,
  };

  return (
    <>
      <header className={mode}>
        <img
          className="logo"
          src="./src/assets/icons/header-logo.svg"
          alt="logo"
        />
        <div className="header-right">
          <Link to="/profile/1" className="user-avatar">
            <Avatar>{user}</Avatar>
          </Link>
          <button className="change-theme" onClick={() => setIsDark(!isDark)}>
            <img
              src={`./src/assets/icons/${mode}.svg`}
              alt="change theme icon"
              className="theme-icon"
            />
          </button>
        </div>
      </header>

      <nav className={mode}>
        <ul>
          <li>
            <NavLink to="/" className={`nav-links ${getClassName}`}>
              <img
                className="svg"
                src="./src/assets/icons/home.svg"
                alt="home icon"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile/1" className={`nav-links ${getClassName}`}>
              <img
                className="svg"
                src="./src/assets/icons/profile.svg"
                alt="profile icon"
              />
            </NavLink>
          </li>
        </ul>
      </nav>

      <main className={mode}>
        <DataContext.Provider value={value}>
          <Routes>
            <Route path="/" element={<PostFeed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/post/:id" element={<ClickedPost />} />
          </Routes>
        </DataContext.Provider>
      </main>
    </>
  );
}
