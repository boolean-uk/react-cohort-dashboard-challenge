// import CreatePost from "./CreatePost";
import CreatePost from "./CreatePost";
import Post from "./Post";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AppContext } from "../App";

function Posts() {
  const context = useContext(AppContext);

  return (
    <main className="main ligth-blue-background">
      <div>
        <h2 className="title"></h2>
      </div>
      {context.posts.length === 1 ? <div></div> : <CreatePost />}
      <div className="show-more-tweets">
        <p></p>
      </div>
      {context.posts
        .sort((a, b) => parseInt(b.id) - parseInt(a.id))
        .map((post, index) => (
          <Post post={post} key={index} />
        ))}
    </main>
  );
}

export default Posts;

Posts.propTypes = {
  posts: PropTypes.array,
  setPosts: PropTypes.func,
  contacts: PropTypes.array,
  findPost: PropTypes.func,
};
