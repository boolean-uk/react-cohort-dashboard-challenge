import "./App.css";
import HomePage from "@/components/pages/HomePage";
import PostPage from "@/components/pages/PostPage";
import ProfilePage from "@/components/pages/ProfilePage";
import AppContent from "./components/app/AppContent";
import AppHeader from "./components/app/AppHeader";
import AppSidebar from "./components/app/AppSidebar";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <AppHeader />
      <AppSidebar />
      <AppContent>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home/" />} />
          <Route path="/home/" element={<HomePage />} />
          <Route path="/post/:id/*" element={<PostPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
      </AppContent>
    </>
  );
}

export default App;
