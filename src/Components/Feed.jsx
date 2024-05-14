import NewPost from "../Subcomponents/NewPost";
import PostCard from "../Subcomponents/PostCard";
import { useState, useEffect } from "react";
import { BarLoader } from "react-spinners";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const data = await fetch(
      "https://boolean-api-server.fly.dev/MrStashy/post"
    );
    const json = await data.json();
    setPosts(json);
  };


  if (posts.length === 0) {
    return (
    <div className="m-5 flex flex-col gap-3">
    <NewPost />
    <BarLoader color="#000046" className="my-10 place-self-center"/>
    </div>
    )
  }

  return (
    <div className="m-5 flex flex-col gap-3">
    <NewPost />
    {posts.map((post, index) => {
        return(
            <PostCard post={post} key={index}/>
        )
    })}
    </div>
)
}
