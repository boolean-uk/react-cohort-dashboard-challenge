import { NavLink, Routes, Route, Link } from "react-router-dom";
import { createContext, useState, useEffect } from "react";

// components
import Avatar from "./components/Avatar";
import PostFeed from "./components/PostFeed";
import Profile from "./components/Profile";
import ClickedPost from "./components/ClickedPost";

// icons
import logoIcon from "./assets/icons/header-logo.svg";
import profileIcon from "./assets/icons/profile.svg";
import homeIcon from "./assets/icons/home.svg";
import light from "./assets/icons/light.svg";
import dark from "./assets/icons/dark.svg";

// to get the active link in the nav bar
function getClassName({ isActive }) {
  if (isActive) {
    return "active"; // => CSS class
  }
}

export const DataContext = createContext();
export const baseUrl = "https://boolean-uk-api-server.fly.dev/Hamada-AB";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(getItem);

  // change CSS color-scheme class based on the selected mode
  const mode = isDark ? "dark" : "light";
  // change the icon on the header based on the selected mode
  const modeIcon = isDark ? dark : light;

  useEffect(() => {
    localStorage.setItem("isDark", isDark);
  }, [isDark]);

  // the fn to get the item only once (when the app starts) not every time it re-renders
  function getItem() {
    return localStorage.getItem("isDark") === "true";
  }

  useEffect(() => {
    fetch(`${baseUrl}/contact`)
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

    fetch(`${baseUrl}/contact/1`)
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

    fetch(`${baseUrl}/post`)
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
        <img className="logo" src={logoIcon} alt="logo" />
        <div className="header-right">
          <Link to="/profile/1" className="user-avatar">
            <Avatar>{user}</Avatar>
          </Link>
          <button className="change-theme" onClick={() => setIsDark(!isDark)}>
            <img
              src={modeIcon}
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
              <img className="svg" src={homeIcon} alt="home icon" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile/1" className={`nav-links ${getClassName}`}>
              <img className="svg" src={profileIcon} alt="profile icon" />
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
