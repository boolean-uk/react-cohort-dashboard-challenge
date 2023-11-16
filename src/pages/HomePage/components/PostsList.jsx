import { useContext } from "react";

// components
import PostItem from "./PostItem";

// context
import { MainContext } from "../../../App";

const PostsList = () => {
    const { user, posts, getPosts } = useContext(MainContext);

    return (
        <div className="postsList">
            {posts.map((post, index) => (
                <PostItem
                    key={index}
                    post={post}
                    user={user}
                    getPosts={getPosts}
                />
            ))}
        </div>
    );
};

export default PostsList;
