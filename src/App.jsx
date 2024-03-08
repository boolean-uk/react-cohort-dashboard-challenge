import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import PersonProfile from "./components/PersonProfile";

const MyContext = createContext();

function App() {
  const [posts, setPosts] = useState([]);
  const [, setContacts] = useState([])
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
            return { ...post, firstName: matchingContact.firstName, lastName: matchingContact.lastName, favouriteColour: matchingContact.favouriteColour };
          } else {
            return post;
          }
        });

        postsWithNames.sort((a, b) => b.id - a.id);
        setPosts(postsWithNames);
        setContacts(contactsData);
        setDataFetched(true);
      });
    }
  }, [dataFetched]);

  console.log(posts)

  return (
    <>
        <div className="container">
          <Header />
          <Dashboard posts={posts} setPosts={setPosts} setDataFetched={setDataFetched}/>
        </div>
        <Routes>
          {/* <Route path="/" element={<Dashboard posts={posts} setPosts={setPosts} setDataFetched={setDataFetched}/>} /> */}
          <Route path="/view/:id" element={<PersonProfile/>} />
        </Routes>
    </>
  );
}

export {App};
