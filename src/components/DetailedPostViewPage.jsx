import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostsList from "./componenets_homepage/PostsList";
import { fetchAllContacts } from "../utils/api";
import { basePostURL } from "../utils/urls";

function DetailedPostViewPage() {
  const [post, setPost] = useState([]);

  const URL = `https://boolean-api-server.fly.dev/llllllll-l/post`;
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetchAllContacts(`${basePostURL}/${id}`);
    setPost(response);
  };

  return (
    <>
      <PostsList postsList={post} />
    </>
  );
}

export default DetailedPostViewPage;
