import PostList from "./components/PostList"
import CreatePost from "./components/CreatePost"

function PostFeed() {
  return (
    <div>
        <div className="pink">
            <CreatePost></CreatePost>
        </div>
        <PostList></PostList>
    </div>
  )
}

export default PostFeed