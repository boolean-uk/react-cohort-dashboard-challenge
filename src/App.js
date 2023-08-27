import logo from "./logo.svg";
import "./App.css";
import FeedSection from "./Components/Feed/FeedSection";
import LeftNavSection from "./Components/LeftNavSection";
import Header from "./Components/Header";
import DataContext from "./DataContext";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfileView from "./Components/Profile/ProfileView";
import PostView from "./Components/Post/PostView";
import { findById, shuffleArray } from "./Utils";
import EditProfileForm from "./Components/Profile/EditProfileForm";
import PostForm from "./Forms/PostForm";

function App() {
    // DO THIS IN DATA CONTEXT
    // const API_BASE_URL = "";
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState({});
    const [editingIndex, setEditingIndex] = useState(null);

    async function getData() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const jsonResponse = await response.json();
        const shuffledPosts = shuffleArray(jsonResponse);
        const randomTenPosts = shuffledPosts
            .slice(0, 10)
            .map((post) => ({ ...post, expanded: false }));
        setPosts(randomTenPosts);
        const usersResponse = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const usersData = await usersResponse.json();
        setUsers(usersData);
    }

    useEffect(() => {
        getData();
    }, [setUsers]);

    const loggedUser = findById(users, 1);
    if (!loggedUser) {
        return null;
    }
    return (
        <div className="app">
            <DataContext.Provider
                value={{
                    posts,
                    setPosts,
                    loggedUser,
                    comments,
                    setComments,
                    users,
                    setUsers,
                    editingIndex,
                    setEditingIndex
                }}
            >
                <Header />
                <LeftNavSection />

                <Routes>
                    <Route path="/" element={<FeedSection />} />
                    <Route path="/view/profile/:id" element={<ProfileView />} />
                    <Route
                        path="/edit/profile/:id"
                        element={<EditProfileForm />}
                    />
                    <Route path="/view/post/:id" element={<PostView />} />
                    <Route path="/edit/post/:id" element={<PostForm />} />
                </Routes>
            </DataContext.Provider>
        </div>
    );
}

export default App;
