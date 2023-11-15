import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostListPageItem from "../PostListPage/PostListPageItem";

const API_BASE_URL = "https://boolean-api-server.fly.dev";

export default function PostPageSection() {
  const [post, setThePost] = useState(null);
  const navigator = useNavigate();
  const { postid } = useParams();

  useEffect(() => {
    const fetchSinglePost = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/Hayor4real/post/${postid}`
        );
        const data = await response.json();
        setThePost(data);
      } catch (error) {
        console.error("Error fetching single post:", error);
      }
    };

    fetchSinglePost();
  }, [API_BASE_URL, postid]);

  if (post) {
    return (
      <div className="post__page">
        <button onClick={() => navigator(-1)}>Back</button>
        <PostListPageItem post={post} API_BASE_URL={API_BASE_URL} />
      </div>
    );
  }

  return null; // Render nothing if post is still loading
}
