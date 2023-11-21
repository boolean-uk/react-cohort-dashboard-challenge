import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";
import "./renderSingle.css";

function RenderSinglePost(props) {
  const { posts, contact } = props;

  const [singlePost, setSinglePost] = useState(null);

  const { id } = useParams();

  if (!posts) {
    console.log("posts don't exist");
    return <h3>LOADING</h3>;
  }

  useEffect(() => {
    const foundPost = posts.find((post) => post.id === Number(id));
    console.log("values of id is", id, typeof id);
    setSinglePost(foundPost);
  }, [posts, id]);

  if (!singlePost) {
    console.log("singlePost don't exist");
    return <h3>LOADING</h3>;
  }

  const contactId = singlePost.contactId;

  return <Post post={singlePost} contact={contact} contactId={contactId} />;
}

export default RenderSinglePost;
