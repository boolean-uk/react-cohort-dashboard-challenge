import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostsList from "./componenets_homepage/PostsList";

function DetailedPostViewPage() {
  const [post, setPost] = useState([]);

  const URL = `https://boolean-api-server.fly.dev/llllllll-l/post`;
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, [URL]);

  const fetchData = async () => {
    try {
      const response = await fetch(URL + `/${id}`);

      if (!response.ok) {
        console.log(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      const postData = Array.isArray(data) ? data : [data];

      setPost(postData);
    } catch (er) {
      console.log("OBS!!! Something went wrong retrieving Posts from DB");
    }
  };

  return (
    <>
      <PostsList postsList={post} />
    </>
  );
}

export default DetailedPostViewPage;
