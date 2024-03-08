import PostList from './components/PostList'
import CreatePost from './components/CreatePost'

function Home() {

  return (
    <div>
      <CreatePost />
      <PostList />
    </div>
  );
}

export default Home;
