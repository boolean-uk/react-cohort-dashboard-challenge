import { createContext, useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import PostPage from './components/post/PostPage';
import PostDetail from "./components/post/PostDetail";
import Profile from './components/post/Profile';

export const BaseURL = "https://boolean-api-server.fly.dev/malimo326"



function App() {

  const [user, setUser] = useState({
    id: -1,
    firstName: "Not",
    lastName: "Loaded",
});
  const [postData, setPostData] = useState([]);
  const [contactData, setContactData] = useState([]);
  
  const getPostData = async () => {
      const response = await fetch(
          BaseURL + "/post"
      );
      const data = await response.json();
      console.log(data);
      setPostData([...data]);
  };
  
  const getContactData = async () => {
      const response = await fetch(
          BaseURL + "/contact"
      );
      const data = await response.json();
      console.log(data);
      setUser({ ...data[0] });
      setContactData([...data]);
  };
  
  useEffect(() => {
      getContactData();
      getPostData();
  }, []);

  return (
    <>
       <div className="app">
            <postContext.Provider
                value={{
                    posts: postData,
                    contacts: contactData,
                    user: user,
                }}
            >
                <Layout>
                <Routes>
                        <Route path="/" element={<PostPage />} />
                        <Route path="/profile/:id" element={<Profile/>} />
                        <Route path="/detail/:id" element={<PostDetail />} />
                    </Routes>
                </Layout>
            </postContext.Provider>
        </div>
    </>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export const postContext = createContext();
export default App
