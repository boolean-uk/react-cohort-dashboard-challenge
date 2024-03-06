// import CreatePost from "./CreatePost";
import CreatePost from "./CreatePost";
import Post from "./Post";
import user from "../assets/data/user";
import PropTypes from "prop-types";

export default function Posts({ posts, setPosts, contacts, findPost }) {
  return (
    <main className="main green">
      <div>
        <h2 className="title"></h2>
      </div>

      {posts.length === 1 ? (
        <div></div>
      ) : (
        <CreatePost posts={posts} setPosts={setPosts} user={user} />
      )}

      <div className="show-more-tweets">
        <p></p>
      </div>

      {posts
        .sort((a, b) => parseFloat(b.id) - parseFloat(a.id))
        .map((post, index) => (
          <Post
            post={post}
            contacts={contacts}
            findPost={findPost}
            key={index}
          />
        ))}
    </main>
  );
}

Posts.propTypes = {
  posts: PropTypes.array,
  setPosts: PropTypes.func,
  contacts: PropTypes.array,
  findPost: PropTypes.func,
};
