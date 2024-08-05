import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostsAndProfiles = async () => {
      try {
        const postsResponse = await axios.get(
          "https://boolean-uk-api-server.fly.dev/gent009/post"
        );
        setPosts(postsResponse.data);

        const profilesResponse = await axios.get(
          "https://boolean-uk-api-server.fly.dev/gent009/profile"
        );
        setProfiles(profilesResponse.data);
      } catch (error) {
        setError("Failed to load posts or profiles.");
        console.error("Error fetching data:", error);
      }
    };

    fetchPostsAndProfiles();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, profiles, error }}>
      {children}
    </PostsContext.Provider>
  );
};
