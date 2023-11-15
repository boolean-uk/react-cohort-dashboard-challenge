import { useEffect, useState } from "react";

import "./style.css";

// components
import CreatePostInput from "./components/CreatePostInput";
import PostsList from "./components/PostsList";

const HomePage = ({ setPage, user, posts, getPosts }) => {
    useEffect(() => {
        setPage("home");
        getPosts();
    }, []);

    return (
        <div className="homePage">
            <CreatePostInput user={user} getPosts={getPosts} />

            <PostsList user={user} posts={posts} getPosts={getPosts} />
        </div>
    );
};

export default HomePage;
