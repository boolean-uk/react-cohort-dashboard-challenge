import CreatePost from "../Main/components/CreatePost"
import Posts from "../Main/components/Posts"

import '../../Styles/main.css'
function Main({posts,root,loggedInUseColor,loggedInUserInitials ,shouldGetPost,loggedInUser}) {
return (
  <div className="main">
  <CreatePost loggedInUserInitials={loggedInUserInitials} shouldGetPost={shouldGetPost}loggedInUser={loggedInUser} posts={posts}></CreatePost>
  <Posts posts={posts} root={root} loggedInUseColor={loggedInUseColor} loggedInUserInitials={loggedInUserInitials} ></Posts>
  </div>
  )
}

export default Main;
