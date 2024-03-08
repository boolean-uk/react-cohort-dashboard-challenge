import NavLeft from "../Nav-Left";
import NavTop from "../Nav-Top";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

function Feed() {
  return (
    <div>
      <NavTop />
      <div>
        <NavLeft />
        <div className="mainContent">
          <div className="feed">
            <CreatePost />
            <Posts />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Feed;
