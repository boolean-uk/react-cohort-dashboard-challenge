/* eslint-disable react/prop-types */

import { useContext } from "react";
import PostListItem from "./PostListItem";
import { Context } from "../App";

function PostsList() {
    const { posts } = useContext(Context)
    
    return (
      <ul className="posts-ul">
        {posts.map((post, index) => (
          <PostListItem key={index} post={post}/>
        ))}
      </ul>
    );
}

export default PostsList