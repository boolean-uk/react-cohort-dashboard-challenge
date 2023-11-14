import NewPost from "./NewPost";
import Posts from "./Posts";

function MainContent({ posts }) {
  return (
    <main className="mainContent">
      {/* First box in Main */}
      <NewPost />
      <Posts posts={posts} />
    </main>
  );
}

export default MainContent;
