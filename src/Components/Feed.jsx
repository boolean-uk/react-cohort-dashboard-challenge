import NewPost from "../Subcomponents/NewPost";
import PostCard from "../Subcomponents/PostCard";
import { useState, useEffect, useContext } from "react";
import { BarLoader } from "react-spinners";
import { loggedInUser } from "../App";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const user = useContext(loggedInUser);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const data = await fetch(
      "https://boolean-uk-api-server.fly.dev/MrStashy/post"
    );
    const json = await data.json();
    setPosts(json);
  };

  if (posts.length === 0) {
    return (
      <div className="m-5 flex flex-col gap-3">
        <NewPost user={user} />
        <BarLoader color="#000046" className="my-10 place-self-center" />
      </div>
    );
  }

  const sortedPosts = posts.sort((a, b) => b.id - a.id);
  return (
    <ul className="m-5 flex flex-col gap-3">
      <NewPost user={user} getPosts={getPosts}/>
      {sortedPosts.map((post, index) => {
        return <PostCard post={post} key={index} />;
      })}
    </ul>
  );
}
