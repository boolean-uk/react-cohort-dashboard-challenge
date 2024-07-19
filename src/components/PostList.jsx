import { useContext } from "react";
import { appContext } from "../App";
import PostItem from "./PostItem";

export default function PostList() {
    const { allPosts, setAllPosts, loggedInUser, sortedPosts } =
      useContext(appContext);

    return (
      <div className="posts-list">
        <ul className="posts-ul">
          {sortedPosts.map((post, index) => (
            <PostItem key={index} post={post} />
          ))}
        </ul>
      </div>
    );
}