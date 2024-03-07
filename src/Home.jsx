import PostList from "./PostList";
import CreatePost from "./CreatePost";
function Home(){
    return (
        <main className="center">
        <div className="create-post-component">
            <CreatePost />
        </div>
        <div className="posts-list">
          <PostList />
        </div>
      </main>

    )
}export default Home