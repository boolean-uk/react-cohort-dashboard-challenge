//import './PostFeed.css';
import PostInput from "./PostInput";
import PostList from "./PostList";
import { createContext, useEffect, useState } from "react";
export const UserPostsContext = createContext();

function PostFeed() {
   const [userPosts, setUserPosts] =  useState([])

   useEffect(() => {
    updateUserPosts();
   }, [userPosts])

   const updateUserPosts = () => {
    const fetchdata = async () => {
        const response = await fetch("https://boolean-uk-api-server.fly.dev/PandersPanda/post")
        const jsonData = await response.json();
        setUserPosts(jsonData)
     };
     fetchdata();
   }

  return (
    <div className="postFeed">
      <UserPostsContext.Provider
      value={{userPosts: userPosts, updateUserPosts: updateUserPosts}}>
        <PostInput/>
        <PostList />
      </UserPostsContext.Provider>
    </div>
  );
}

export default PostFeed;