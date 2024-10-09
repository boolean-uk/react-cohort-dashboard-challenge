import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Feed from "./Components/Feed";
import PostView from "./Components/PostView";

const AppContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const [contacts, setContacts] = useState([]);

  const postUrl = "https://boolean-uk-api-server.fly.dev/ingeborgausteid/post";
  const contactUrl =
    "https://boolean-uk-api-server.fly.dev/ingeborgausteid/contact";

  const fetchPosts = async () => {
    const postsResponse = await fetch(postUrl);
    const jsonPostData = await postsResponse.json();
    setPosts(jsonPostData);
  };

  const fetchContacts = async () => {
    const contactsResponse = await fetch(contactUrl);
    const jsonContactData = await contactsResponse.json();
    setContacts(jsonContactData);
  };

  useEffect(() => {
    fetchPosts();
    fetchContacts();
  }, [posts, contacts]);

  return (
    <AppContext.Provider
      value={{ posts, postUrl, setPosts, contacts, fetchPosts }}
    >
      <Header />
      <div className="body container">
        <SideBar />

        <Routes>
          <Route path="/" element={<Feed />}></Route>
          <Route path="/post/:id" element={<PostView />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export { App, AppContext };
