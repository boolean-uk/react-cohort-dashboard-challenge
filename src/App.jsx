import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CohortManagerMainPage from "./pages/CohortManagerMainPage";
import { useEffect, useState, createContext } from "react";
import { getAllPosts } from "./Api.js";
export const PostContext = createContext();

function App() {
  const [postsData, setPostsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllPosts(setPostsData, setLoading, setError);
  }, []);

  if (loading) return "Loading...";
  if (error) return "Error!!!";

  return (
    <>
      <PostContext.Provider
        value={{ postsData: postsData, setPostsData: setPostsData }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CohortManagerMainPage />} />

            {/*<Route path="/posts/:id" element={}/>*/}
          </Routes>
        </BrowserRouter>
      </PostContext.Provider>
    </>
  );
}

export default App;
