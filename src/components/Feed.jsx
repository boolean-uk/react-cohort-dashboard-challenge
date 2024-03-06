import { useContext } from "react";
import PostsList from "./PostsList";
import { Context } from "../App";

function Feed() {
    const { posts } = useContext(Context)

    return (
      <main className="feed">
        <form className="post-form" onSubmit={() => {}}>
          <textarea
            name="post-input"
            rows="4"
            cols="50"
            placeholder="What's on your mind?"
          ></textarea>

          <button className="post-button">Post</button>
        </form>

        <PostsList posts={posts} />
      </main>
    );
}

export default Feed