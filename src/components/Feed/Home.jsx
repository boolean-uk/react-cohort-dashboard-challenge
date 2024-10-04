import CreatePost from "../CreatePost/CreatePost";
import Post from "./Post";
import "../Feed/Home.css";
import { useContext } from "react";
import { PostContext } from "../../App";

export default function Home() {
    const { posts } = useContext(PostContext);

    return(
        <div className="feed-container">
          <CreatePost />
          <ul>
            {posts.map((post, index) => (
                <Post key={index} post={post}/>
            ))}
          </ul>
        </div>
    );
}