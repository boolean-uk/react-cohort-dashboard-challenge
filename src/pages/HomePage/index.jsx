import { useEffect, useState } from "react";

import "./style.css";

// components
import CreatePostInput from "./components/CreatePostInput";
import PostsList from "./components/PostsList";

// api
import { getAllPosts } from "../../utilities/api";

const HomePage = ({ setPage, user }) => {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        getAllPosts().then((data) => setPosts(data));
    };

    useEffect(() => {
        setPage("home");
        getPosts();
    }, []);

    return (
        <div className="homePage">
            <CreatePostInput user={user} />

            <PostsList user={user} posts={posts} />
        </div>
    );
};

export default HomePage;
