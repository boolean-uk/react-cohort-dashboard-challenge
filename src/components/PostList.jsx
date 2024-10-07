import PostItem from "./PostItem";
import { Context } from "../App"
import { useContext } from "react";
// import "../style/PostListCSS.css"

export default function PostList() {
    console.log("inside postList")

    const { posts } = useContext(Context);

    console.log("postlist " + posts)


    return (
        <ul className="post-list">
            {posts.map((postItem, i) => (
                <PostItem postItem={postItem} key={i} />
            ))}
        </ul>
    );
}