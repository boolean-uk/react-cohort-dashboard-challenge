import { useEffect, useState } from "react";
import CreatePostModule from "./componenets_homepage/CreatePostModule.jsx";
import PostsList from "./componenets_homepage/PostsList.jsx";
//import { fetchData } from "../utils/api.js";

function HomePage() {
  const [postsList, setPostsList] = useState([]);

  const URL = `https://boolean-api-server.fly.dev/llllllll-l/post`;

  useEffect(() => {
    fetchData();
  }, [URL]);

  const fetchData = async () => {
    try {
      const response = await fetch(URL);

      if (!response.ok) {
        console.log(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      const sortedPosts = data.sort((a, b) => b.id - a.id);
      setPostsList(sortedPosts);
    } catch (er) {
      console.log("OBS!!! Something went wrong retrieving Posts from DB");
    }
  };
  console.log("postsList in Homepage: ", postsList);

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
