import { useEffect, useState, createContext } from "react";
import "./App.css";
import TopHeader from "./TopHeader";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { Routes, Route } from "react-router-dom";
import SinglePost from "./SinglePost";

export const Context = createContext();
export const NewPostContext = createContext();

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    firstName: "Atakan",
    lastName: "Temizkan",
    favouriteColour: "#b0f000",
    id: "0",
  });
  const [isNewPost, setNewPost] = useState(false);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/AtikoSpeed/contact")
      .then((response) => response.json())
      .then(setContacts);
  }, []);

  if (contacts.length > 0) {
    return (
      <>
        <Context.Provider value={[currentUser, contacts]}>
          <TopHeader />
          <Sidebar />
          <NewPostContext.Provider value={[isNewPost, setNewPost]}>
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/post/:id" element={<SinglePost />} />
            </Routes>
          </NewPostContext.Provider>
        </Context.Provider>
      </>
    );
  }
}
