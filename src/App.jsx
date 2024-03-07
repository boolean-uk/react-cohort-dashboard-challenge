import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  const [posts, setPosts] = useState([]);
  const [contacts, setContacts] = useState([])
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    if (!dataFetched) {
      Promise.all([
        fetch(`https://boolean-api-server.fly.dev/nicolaiklokmose/post`).then(response => response.json()),
        fetch(`https://boolean-api-server.fly.dev/nicolaiklokmose/contact`).then(response => response.json())
      ]).then(([postsData, contactsData]) => {
        const postsWithNames = postsData.map(post => {
          const matchingContact = contactsData.find(contact => contact.id === post.contactId);
          if (matchingContact) {
            return { ...post, firstName: matchingContact.firstName, lastName: matchingContact.lastName };
          } else {
            return post;
          }
        });
        setPosts(postsWithNames);
        setContacts(contactsData);
        setDataFetched(true);
      });
    }
  }, [dataFetched]);
  
  return (
    <>
        <div className="container">
          <Header />
          <Dashboard posts={posts} setPosts={setPosts}/>
        </div>
    </>
  );
}

export default App;
