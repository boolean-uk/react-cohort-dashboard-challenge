import { createContext, useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await axios(
          "https://boolean-api-server.fly.dev/krzysztofmmm/post"
        );
        setPosts(result.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const createPost = async (title, content) => {
    try {
      const result = await axios.post(
        "https://boolean-api-server.fly.dev/krzysztofmmm/post",
        {
          title,
          content,
          contactId: 1, // Assuming contact ID 1 for simplicity
        }
      );
      setPosts([result.data, ...posts]);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const deletePost = async (postId) => {
    try {
      await axios.delete(
        `https://boolean-api-server.fly.dev/krzysztofmmm/post/${postId}`
      );
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const value = {
    posts,
    createPost,
    deletePost,
    setPosts,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
