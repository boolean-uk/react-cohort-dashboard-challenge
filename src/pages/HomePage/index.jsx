import { useContext, useEffect } from "react";

import "./style.css";

// components
import CreatePostInput from "./components/CreatePostInput";
import PostsList from "./components/PostsList";

// context
import { MainContext } from "../../App";

const HomePage = () => {
    const { setPage, getPosts } = useContext(MainContext);

    useEffect(() => {
        setPage("home");
        getPosts();
    }, []);

    return (
        <div className="homePage">
            <CreatePostInput />

            <PostsList />
        </div>
    );
};

export default HomePage;
