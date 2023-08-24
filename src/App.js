import './styles/app.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Main from './pages/NewsFeed/Main';

function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
