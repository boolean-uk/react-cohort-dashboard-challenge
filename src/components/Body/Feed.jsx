import Post from "./Post/Post";
import "./Body.css";
import { useContext, useEffect } from "react";
import { PostContext } from "../../App";

export default function Feed() {
  const { posts, setPosts } = useContext(PostContext);

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/VictorAdamson/post`)
      .then((response) => {
        if (response.ok) return response.json();
        throw response;
      })
      .then((jsonData) => {
        console.log("Fetching posts: ", jsonData);
        setPosts(jsonData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setPosts]);

  return (
    <>
      <div>
        {posts.toReversed().map((post, index) => {
          return <Post key={index} post={post} />;
        })}
      </div>
    </>
  );
}
