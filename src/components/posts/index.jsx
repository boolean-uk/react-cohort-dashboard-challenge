import { useContext, useState, useEffect } from "react";
import CreatePost from "./Post/CreatePost";
import PostItem from "./Post/PostItem";
import { PostContext, UserContext } from "../../App.jsx";

export default function PostBody() {
  const myContext = useContext(PostContext);
  const userContext = useContext(UserContext)


  return (
    <div className="postBody">
      <CreatePost currentUser={userContext.currentUser} />
      <div className="posts">
        {myContext.posts.toReversed().map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
