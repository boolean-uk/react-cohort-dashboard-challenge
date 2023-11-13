import "./style.css";

// components
import CreatePostInput from "./components/CreatePostInput";
import PostsList from "./components/PostsList";

const HomePage = () => {
    return (
        <div className="homePage">
            <CreatePostInput />

            <PostsList />
        </div>
    );
};

export default HomePage;
