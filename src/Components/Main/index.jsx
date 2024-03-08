import SideBar from "../SideBar/SideBar.jsx";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./comps/Dashboard/Posts.jsx";
import Profile from "./comps/Profile/Profile.jsx";
import Login from "../Login/index.jsx";
import ViewPost from "./comps/Dashboard/ViewPost.jsx";
export default function MenuLeft() {
  return (
    <div className="container-nav-main">
      <SideBar />
      <Routes>
        <Route path="/home/:id" element={<Dashboard />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/" element={<Login />} />
        <Route path="/post/:id" element={<ViewPost />} />
      </Routes>
    </div>
  );
}
