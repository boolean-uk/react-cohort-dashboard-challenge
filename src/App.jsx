import { createContext, useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Menu'
import { Route, Routes } from 'react-router-dom'
import PostsContainer from './components/posts/PostsContainer'
import PostContainerView from './components/posts/PostContainerView'

const AppContext = createContext()

function App() {

  const [posts, setPosts] = useState([]);

  // Dummy data for logged in user
  const loggedInUser = {
    firstname: 'John',
    lastname: 'Doe',
    initials: 'JD',
    contactId: 16,
    id: 16,
  }

  // Get Posts
  const getData = async () => {
    const res = await fetch("https://boolean-uk-api-server.fly.dev/shyye/post");
    const data = await res.json();
    setPosts(data);
  };

  // On add/create, save data to api
  const saveData = async (dataObject) => {
    const res = await fetch("https://boolean-uk-api-server.fly.dev/shyye/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObject),
    });
    const data = await res.json();
    setPosts([...posts, data]);
  };

  // Load data
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <AppContext.Provider value={{loggedInUser, posts, saveData}}>
        <Header />
        <Sidebar />
      
        <Routes>
          <Route path="/" element={<PostsContainer />} />
          <Route path="/post/:id" element={<PostContainerView />} />
        </Routes>
      </AppContext.Provider>
    </>
  )
}

export { App, AppContext }
