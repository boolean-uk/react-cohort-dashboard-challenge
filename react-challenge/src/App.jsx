import './App.css';
import { BrowserRouter } from "react-router-dom"
import PostForm from './components/PostForm';
import Post from './components/Post';
import CommentSection from './components/CommentSection';
import Comment from './components/Comment';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cohort Manager</h1>
      </header>
      <div className="main-content">
        <PostForm />
        <Post
          user="Sam Fletcher"
          content="Ea molestias quasi exercitationem repellat qui ipsa sit aut"
        />
        <Post
          user="Dolor Lobortis"
          content="Sed maximus nisi in sodales scelerisque. Fusce condimentum dictum nibh, ut blandit erat tempus hendrerit. Pellentesque eleifend lacus nulla."
        >
          <CommentSection>
            <Comment user="Rutrum Augue" content="Curabitur vel dolor risus. Phasellus ornare nulla dolor, amet ultricies augue faucibus vel. Duis eu sapien sit amet es elit laoreet laoreet." />
            <Comment user="Pellentesque Nunc" content="Maecenas volutpat lacus!" />
            <Comment user="Dana Sharwarma" content="Nunc at diam id sem finibus sagittis." />
          </CommentSection>
        </Post>
        <Post
          user="Sam Fletcher"
          content="Dolorem eum magni eos aperiam quia"
        />
      </div>
    </div>
  );
}

export default App;