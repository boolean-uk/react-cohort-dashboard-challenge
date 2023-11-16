import { Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

import "./App.css";

// components
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import PostPage from "./pages/PostPage";

// api
import { getContact } from "./utilities/api";
import { getAllPosts } from "./utilities/api";

// context
const MainContext = createContext();

function App() {
    const [page, setPage] = useState("home");
    const [user, setUser] = useState({});

    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        getAllPosts().then((data) => setPosts(data.reverse()));
    };

    const getMainContact = () => {
        getContact(1).then((data) => setUser(data));
    };

    useEffect(() => {
        getMainContact();
        getPosts();
    }, []);

    return (
        <MainContext.Provider
            value={{
                user: user,
                posts: posts,
                getPosts: getPosts,
                page: page,
                setPage: setPage,
            }}
        >
            <div className="container">
                <Header />
                <Navigation />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/profile/:id" element={<ProfilePage />} />
                    <Route path="/post/:id" element={<PostPage />} />
                </Routes>
            </div>
        </MainContext.Provider>
    );
}

export { App, MainContext };
