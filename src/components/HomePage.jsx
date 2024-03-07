import { useEffect, useState } from "react";
import CreatePostModule from "./componenets_homepage/CreatePostModule.jsx";
import PostsList from "./componenets_homepage/PostsList.jsx";
import { fetchAllPosts } from "../utils/api.js";

function HomePage() {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetchAllPosts();
    if (response) {
      setPostsList(response);
    } else {
      console.error("OBS!!! Someting went wrong...");
    }
  };

  const handlePostCreation = () => {
    fetchData();
  };

  return (
    <>
      <CreatePostModule onPostCreation={handlePostCreation} />
      <PostsList postsList={postsList} />
    </>
  );
}

export default HomePage;
