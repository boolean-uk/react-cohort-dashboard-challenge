import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "https://boolean-api-server.fly.dev/Sabbasn/";

export const useGetAllPosts = (setPosts) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const get = async () => {
      try {
        setLoading(true);
        const response = await axios.get(baseURL + "post");
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

export const useGetAllComments = (postId) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const get = async () => {
      try {
        setLoading(true);
        const response = await axios.get(baseURL + `post/${postId}/comment`);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    get();
  }, [postId]);

  return { data, error, loading };
};
