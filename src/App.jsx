import { useEffect, useState, createContext } from "react";
import "./App.css";
import Header from "./Components/Header";
import LeftMenu from "./Components/LeftMenu";
import Dashboard from "./Components/Dashboard";
import { Route, Routes } from "react-router-dom";
import PostListItem from "./Components/DashboardComponents/PostListItem";
import ViewPost from "./Components/DashboardComponents/ViewPost";
import Profile from "./Components/ProfileComponents/Profile";

const PostContext = createContext();
const ContactContext = createContext();
const UserContext = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
  });

  useEffect(() => {
    fetch`https://boolean-api-server.fly.dev/SebastianEngan/post`
      .then((res) => res.json())
      .then((postData) => setPosts(postData));
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  useEffect(() => {
    fetch`https://boolean-api-server.fly.dev/SebastianEngan/contact`
      .then((res) => res.json())
      .then((contactData) => setContacts(contactData));
  }, []);

  useEffect(() => {
    let currentUser = contacts.find(contact => contact.id ===1)
    if(currentUser !== undefined) {
    setUser(currentUser)
    console.log(user)}
  }, [contacts]);
 
  // useEffect(() => {
  //   console.log(loggedInAs)
  // }, [loggedInAs])

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <PostContext.Provider value={{ posts, setPosts }}>
          <ContactContext.Provider value={{ contacts, setContacts }}>
            <body>
              <div className="container">
                <Header />
                <div className="container-nav-main">
                <LeftMenu />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/posts" element={<Dashboard />} />
                  <Route path="/posts/:id" element={<ViewPost />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
                </div>
              </div>
            </body>
          </ContactContext.Provider>
        </PostContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export { PostContext, App, ContactContext, UserContext };
