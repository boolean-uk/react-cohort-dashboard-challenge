import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import PostPage from "./components/post/PostPage";
import PostDetail from "./components/post/PostDetail";
import { createContext, useEffect, useState } from "react";
import ProfilePage from "./components/profile/ProfilePage";

function App() {
    const [user, setUser] = useState({
        id: -1,
        firstName: "Not",
        lastName: "Loaded",
    });
    const [postData, setPostData] = useState([]);
    const [contactData, setContactData] = useState([]);

    const getPostData = async () => {
        const response = await fetch(
            "https://boolean-api-server.fly.dev/BloodyFM/post"
        );
        const data = await response.json();
        console.log(data);
        setPostData([...data]);
    };

    const getContactData = async () => {
        const response = await fetch(
            "https://boolean-api-server.fly.dev/BloodyFM/contact"
        );
        const data = await response.json();
        console.log(data);
        setUser({ ...data[0] });
        setContactData([...data]);
    };

    useEffect(() => {
        getContactData();
        getPostData();
    }, []);

    return (
        <div className="app">
            <postContext.Provider
                value={{
                    posts: postData,
                    setPosts: setPostData,
                    contacts: contactData,
                    user: user,
                }}
            >
                <Layout>
                    <Routes>
                        <Route path="/" element={<PostPage />} />
                        <Route path="/detail/:id" element={<PostDetail />} />
                        <Route path="/profile/:id" element={<ProfilePage />} />
                    </Routes>
                </Layout>
            </postContext.Provider>
        </div>
    );
}

export default App;
export const postContext = createContext();
