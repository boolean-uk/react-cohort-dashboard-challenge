import './styles/app.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import NewsFeed from './pages/NewsFeed/NewsFeed';

function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <NewsFeed />
    </div>
  );
}

export default App;
