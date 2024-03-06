import PostList from "./components/PostList"
import CreatePost from "./components/CreatePost"
import { PostContext } from "../../App"
import { useContext } from "react"

function PostFeed() {
    const { posts, setPosts } = useContext(PostContext);
    console.log(posts)
  return (
    <div>
        <div className="pink">
            <CreatePost setPosts={setPosts} posts={posts}></CreatePost>
        </div>
        <PostList posts={posts}></PostList>
    </div>
  )
}

export default PostFeed