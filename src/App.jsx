import { Routes, Route } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import { PostFeed } from "./components/PostFeed/PostFeed";
import PostDetails from "./components/PostFeed/PostDetails";
import Header from "./components/Header/Header";
import LeftMenu from "./components/Header/LeftMenu";
import ContextProvider from './ApiProvider';
import ProfilePage from "./components/Header/ProfilePage";
import "./App.css";

const ContactContext = createContext();

function App() {
  


  return (
    <ContextProvider>
      <div className="app">
        <header>
          <Header />
        </header>
        <div className="main-container">
          <nav className="left-menu">
            <LeftMenu />
          </nav>
          <div className="main-content">
            <Routes>
              <Route path="/profile/:contactId" element={<ProfilePage />} />
              <Route path="/" element={<PostFeed />} />
              <Route path="/post/:postId" element={<PostDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </ContextProvider>
  );
}

export { App, ContactContext };
