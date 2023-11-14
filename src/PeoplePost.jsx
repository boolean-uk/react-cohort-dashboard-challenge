import { useState, useEffect } from "react";
import EachPost from "./EachPost";
const PeoplePost = ({ loggedInUser, posts, setPosts }) => {
  return (
    <div className='peoplePostContainer'>
      {posts.map((post) => (
        <EachPost loggedInUser={loggedInUser} key={post.id} post={post} />
      ))}
    </div>
  );
};
export default PeoplePost;
