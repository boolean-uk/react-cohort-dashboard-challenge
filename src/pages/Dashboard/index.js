import NewPostForm from "./components/NewPostForm";
import PostFeed from "./components/PostFeed";

export default function Dashboard() {

  return (
    <main className='main dashboard'>
      <NewPostForm />
      <PostFeed />
    </main>
  )
}