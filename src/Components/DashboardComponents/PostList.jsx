import React from "react";
import { PostContext } from "../../App.jsx";
import { useContext } from "react";
import PostListItem from "./PostListItem";


function PostList() {
  const { posts } = useContext(PostContext);

  const reversedPosts = [...posts].reverse();


  return (
    <>
        <ul >
          {reversedPosts.map((postItem, index) => (
            <PostListItem post={postItem} key={index} />
          ))}
        </ul>
    </>
  );
}

export default PostList;
