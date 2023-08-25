import NewPostForm from "./components/NewPostForm";
import PostFeed from "./components/PostFeed";

export default function Dashboard() {

  return (
    <div className='main dashboard'>
      <NewPostForm />
      <PostFeed />
    </div>
  )
}