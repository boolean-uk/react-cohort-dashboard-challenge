import PostList from "./components/PostList"
import CreatePost from "./components/CreatePost"
import "./styles.css"
import { PostContext } from "../../App"
import { useContext } from "react"

function PostFeed() {
    const { posts, setPosts } = useContext(PostContext);

  return (
    <div className="postfeed-container">
        
          <CreatePost setPosts={setPosts} posts={posts}></CreatePost>
        
        <div className="post-list">
          <PostList posts={posts}> </PostList>
        </div>
    </div>
  )
}

export default PostFeed