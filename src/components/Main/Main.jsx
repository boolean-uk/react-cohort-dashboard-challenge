import CreatePost from "../Main/components/CreatePost"
import Posts from "../Main/components/Posts"

import '../../Styles/main.css'
function Main({posts,root}) {
return (
  <div className="main">
  <CreatePost></CreatePost>
  <Posts posts={posts} root={root}></Posts>
  </div>
  )
}

export default Main;
