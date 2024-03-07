import { DataContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostListItem from "./PostListItem";

export default function ViewPost() {
  const user = useContext(DataContext).user;
  const posts = useContext(DataContext).posts;
  const [post, setPost] = useState(null)
  const { id } = useParams();
  useEffect(() => {
    if (posts) {

        setPost(posts.find((p) => p.id === Number(id)));
      
    }
  }, [posts, id]);
  if (!post) return <p>Loading...</p>;


  return (
    <PostListItem post={post}/>
  );
}
