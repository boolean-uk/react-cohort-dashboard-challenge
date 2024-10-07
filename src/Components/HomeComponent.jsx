import PostComponent from './PostComponents/PostComponent';
import CreatePostComponent from './PostComponents/CreatePostComponent'; 

export default function HomeComponent() {
  return (
    <main className="main-content">
      <CreatePostComponent />
      <PostComponent />
    </main>
  );
}
