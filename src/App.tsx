import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Posts from "./components/posts/Posts";
import PostDetails from "./components/posts/PostDetails";
import Profile from "./components/profiles/Profile";

export function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <NavBar />
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/post/:id" element={<PostDetails />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
