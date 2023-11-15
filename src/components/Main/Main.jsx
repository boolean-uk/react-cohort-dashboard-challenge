import CreatePost from "../Main/components/CreatePost";
import Posts from "../Main/components/Posts";

import "../../Styles/main.css";
function Main({
  posts,
  root,
  loggedInUserInitials,
  shouldGetPost,
  loggedInUser,
}) {
  return (
    <div className="main">
      <CreatePost
        loggedInUserInitials={loggedInUserInitials}
        shouldGetPost={shouldGetPost}
        loggedInUser={loggedInUser}
        posts={posts}
      ></CreatePost>
      <Posts
        posts={posts}
        root={root}
        loggedInUser={loggedInUser}
        loggedInUserInitials={loggedInUserInitials}
      ></Posts>
    </div>
  );
}

export default Main;
