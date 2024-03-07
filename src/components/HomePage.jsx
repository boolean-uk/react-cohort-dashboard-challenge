import { useEffect, useState } from "react";
import CreatePostModule from "./componenets_homepage/CreatePostModule.jsx";
import PostsList from "./componenets_homepage/PostsList.jsx";
import { fetchAllContacts } from "../utils/api.js";
import { basePostURL } from "../utils/urls.js";

function HomePage() {
  const [postsList, setPostsList] = useState([]);

  const URL = `https://boolean-api-server.fly.dev/llllllll-l/post`;

  useEffect(() => {
    fetchData();
  }, [URL]);

  const fetchData = async () => {
    const response = await fetchAllContacts(basePostURL);
    setPostsList(response);
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
