import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostsList from "./componenets_homepage/PostsList";
import { fetchAllPosts } from "../utils/api";
import { basePostURL } from "../utils/urls";

function DetailedPostViewPage() {
  const [post, setPost] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetchAllPosts(`${basePostURL}/${id}`);
    if (response) {
      setPost(response);
    } else {
      console.error("OBS!!! Something went wrong");
    }
  };

  return (
    <>
      <PostsList postsList={post} />
    </>
  );
}

export default DetailedPostViewPage;
