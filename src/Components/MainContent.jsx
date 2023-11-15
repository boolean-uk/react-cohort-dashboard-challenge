import NewPost from "./NewPost";
import Posts from "./Posts";

function MainContent({ posts, createPost }) {
  return (
    <>
      {/* First box in Main */}
      <NewPost createPost={createPost} />
      <Posts posts={posts} />
    </>
  );
}

export default MainContent;
