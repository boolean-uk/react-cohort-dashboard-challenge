import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

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

function App() {
    const [page, setPage] = useState("home");
    const [user, setUser] = useState({});

    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        getAllPosts().then((data) => setPosts(data.reverse()));
    };

    useEffect(() => {
        getContact(1).then((data) => setUser(data));
        getPosts();
    }, []);

    return (
        <div className="container">
            <Header user={user} />
            <Navigation page={page} />

            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePage
                            setPage={setPage}
                            user={user}
                            posts={posts}
                            getPosts={getPosts}
                        />
                    }
                />
                <Route
                    path="/profile/:id"
                    element={<ProfilePage setPage={setPage} />}
                />
                <Route
                    path="/post/:id"
                    element={
                        <PostPage
                            user={user}
                            setPage={setPage}
                            getPosts={getPosts}
                            posts={posts}
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
