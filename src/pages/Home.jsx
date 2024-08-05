import React, { useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import Post from "../components/Post";

const Home = () => {
  const { posts, profiles } = useContext(PostsContext);

  return (
    <div className="home">
      <h1>Post Feed</h1>
      {posts.map((post) => {
        const profile = profiles.find(
          (profile) => profile.id === post.contactId
        );
        return <Post key={post.id} post={post} profile={profile} />;
      })}
    </div>
  );
};

export default Home;
