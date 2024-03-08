import { useState, createContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Header from "./Components/Header";
import LeftMenu from "./Components/LeftMenu";
import PostBoard from "./Components/Post/PostBoard";
import Profile from "./Components/Profile/Profile";
import PostPage from "./Components/Post/PostPage";
export const TempContext = createContext();

function App() {
  const [currentTab, setCurrentTab] = useState("postboard");

  const [user, setUser] = useState(undefined);
  const [currentUser, setCurrentUser] = useState({
    firstName: " ",
    lastName: " ",
    favouriteColour: "#ffFFff",
  });

  const [contactData, setContactData] = useState([]);
  const [postData, setPostData] = useState([]);
  const contactURL = "https://boolean-api-server.fly.dev/Slingreen/contact";
  const postURL = "https://boolean-api-server.fly.dev/Slingreen/post";

  function getPosts() {
    fetch(postURL)
      .then((res) => res.json())
      .then((data) => setPostData(data.reverse()));
  }

  function getContacts() {
    fetch(contactURL)
      .then((res) => res.json())
      .then((data) => setContactData(data));
  }

  async function AddPost(post) {
    const response = await fetch(
      postURL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to submit form: " + response.status + response.statusText
      );
    }

    getPosts();
    getContacts();
  }

  useEffect(() => {
    getContacts();
    getPosts();
  }, []);

  useEffect(() => {
    setUser(contactData.find((contact) => contact.id === 1))
  }, [contactData]);

  useEffect(() => {
    if(user !== undefined){
      setCurrentUser(user);
    }
  }, [user]);
  
  useEffect(() => {
    // console.log("postData", postData)
    // console.log("contactData", contactData)
    // console.log(user)  
  }, [postData, contactData,user]);

  return (
    <>
      <div className="app">
        <TempContext.Provider value={{ currentTab: currentTab, setCurrentTab: setCurrentTab, postData: postData, contactData: contactData, currentUser: currentUser, AddPost:AddPost, getContacts:getContacts}}>
          <Header />
          <LeftMenu />
          <Routes>
            <Route path="/" element={<PostBoard />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/post/:id" element={<PostPage />} />
          </Routes>
        </TempContext.Provider>
      </div>
    </>
  );
}

export default App;
