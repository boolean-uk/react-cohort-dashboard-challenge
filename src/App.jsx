import './App.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PostFeed from './components/PostFeed';

function App() {
  return (
    <div className='container'>
      <Header />
      <div className="container-nav-main">
        <Sidebar />
        <main className="main">
          <PostFeed />
        </main>
      </div>
    </div>
  );
}

export default App;