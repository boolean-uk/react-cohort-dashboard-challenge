import Posts from "./Posts";

function MainContent({ posts }) {
  return (
    <main className="mainContent">
      {/* First box in Main */}
      <div className="postContainer">
        <div className="userInitialsPost"></div>
        <div className="whatsOnMind">
          <form>
            <input
              className="whatsOn"
              placeholder="What's on your mind?"
              type="text"
            />
          </form>
        </div>
        <div className="postButton">
          <button className="postBtn">
            <p>Post</p>
          </button>
        </div>
      </div>
      <Posts posts={posts} />
    </main>
  );
}

export default MainContent;
