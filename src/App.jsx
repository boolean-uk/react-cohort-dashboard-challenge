import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import ProfilePage from "./ProfilePage";
import { createContext } from "react";
import Sidebar from "./SideBar";
import { PostsSection } from "./PostsSection";
import { SinglePostPage } from "./SinglePostPage";

export const AppContext = createContext();

function App() {
  const userInitials = "KR"; // This should ideally come from user data

  return (
    <>
      <AppContext.Provider value={{ userInitials }}>
        <Header />
        <div className="container">
          <Sidebar />
          <PostsSection />
        </div>
      </AppContext.Provider>
      <Routes>
        {/* Uncomment and add other routes as necessary */}
        <Route path="/" />
        <Route path="/post/:postId" element={<SinglePostPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
