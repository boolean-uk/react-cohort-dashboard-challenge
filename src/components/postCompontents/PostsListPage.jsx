import { useEffect, useState } from "react";
import { CreatePost } from "./CreatePost";
import { Post } from "./Post";
import { getRequest } from "../../utilites/apiRequests";

export const PostsListPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const handleDeletePost = () => {
    console.log("Handeling delet post");
    getPosts();
  };

  const getPosts = () => {
    getRequest("/post")
      .then((data) => {
        data = data.reverse();
        setPosts([...data]);
      })
      .catch((error) => console.error("Failed to get posts", error));
  };

  return (
    <main>
      <CreatePost getPosts={getPosts} />
      {posts.map((post) => {
        return (
          <Post key={post.id} post={post} handleDeletePost={handleDeletePost} />
        );
      })}
    </main>
  );
};
