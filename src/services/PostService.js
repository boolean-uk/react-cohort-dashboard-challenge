import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "https://boolean-api-server.fly.dev/Sabbasn/post";

export const useGetAllPosts = async (setPosts) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const get = async () => {
      try {
        setLoading(true);
        const response = await axios.get(baseURL);
        setPosts(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    get();
  }, [setPosts]);

  return { error, loading };
};
