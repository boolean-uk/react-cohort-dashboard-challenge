import "./style.css";

// components
import CreatePostInput from "./components/CreatePostInput";
import PostsList from "./components/PostsList";
import { useEffect } from "react";

const HomePage = ({ setPage }) => {
    useEffect(() => {
        setPage("home");
    }, []);

    return (
        <div className="homePage">
            <CreatePostInput />

            <PostsList />
        </div>
    );
};

export default HomePage;
