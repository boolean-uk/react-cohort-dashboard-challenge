import { useEffect, useState } from "react";
import CreatePostModule from "./componenets_homepage/CreatePostModule.jsx";
import PostsList from "./componenets_homepage/PostsList.jsx";

function HomePage() {
  const [postsList, setPostsList] = useState([]);

  const URL = `https://boolean-api-server.fly.dev/llllllll-l/post`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          console.log(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        setPostsList(data);
      } catch (er) {
        console.log("OBS!!! Something went wrong retrieving Posts from DB");
      }
    };
    fetchData();
  }, [URL]);

  return (
    <>
      <CreatePostModule />
      <PostsList postsList={postsList} />
    </>
  );
}

export default HomePage;
