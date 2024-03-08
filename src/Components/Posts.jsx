import { useContext } from "react";
import { AppContext } from "../App";
import Post from "./Post";
import CreatePost from "./CreatePost";
import { useParams } from "react-router-dom";

function Posts() {
  const { posts, setPosts, fetchUser } = useContext(AppContext);
  const { id } = useParams();

  if (!posts) {
    return <p>loading content...</p>;
  }

  return (
    <div className="posts">
      <CreatePost setPosts={setPosts} posts={posts} />
      <ul style={{ padding: "0px" }}>
        {posts.map((post) => {
          if (id || !isNaN(id)) {
            if (post.id === Number(id)) {
              return (
                <Post
                  key={post.id}
                  postId={post.id}
                  post={post}
                  fetchUser={fetchUser}
                  setPosts={setPosts}
                />
              );
            }
          } else {
            return (
              <Post
                key={post.id}
                postId={post.id}
                post={post}
                fetchUser={fetchUser}
                setPosts={setPosts}
              />
            );
          }
        })}
      </ul>
    </div>
  );
}

export default Posts;
