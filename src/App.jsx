import { Route, Routes } from "react-router-dom";
import Navigations from "./Pages/components/Navigations";
import HomePage from "./Pages/HomePage";
import PostPage from "./Pages/PostPage";
import "./App.css";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <>
      <Navigations />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/post/:postId" element={<PostPage />} />
      </Routes>
    </>
  );
}

export default App;
