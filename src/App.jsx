import { Route, Routes } from "react-router-dom";
import Navigations from "./Pages/components/Navigations";
import HomePage from "./Pages/HomePage";
import PostPage from "./Pages/PostPage";
import ProfilePage from "./Pages/ProfilePage";
import ModifyPost from "./Pages/components/ModifyPost";
import DeletePost from "./Pages/components/DeletePost";
import "./App.css";

function App() {
  return (
    <>
      <Navigations />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="/post/:postId/modify" element={<ModifyPost />} />
        <Route path="/post/:postId/delete" element={<DeletePost />} />
      </Routes>
    </>
  );
}

export default App;
