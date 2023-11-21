
import Header from './components/header';
import Nav from './components/nav';
import PostFeed from './Components/PostFeed';
import Profile from './Components/Profile';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles/App.css';

function App() {


  return (
    <div className="grid-container">
      <div className='header-section'>
        <Header/>
      </div>
      <div className="main-grid">
        <div className='nav-bar'>
          <Nav/>
        </div>
        <div className='main-section'>
          
            <Routes>
              <Route path="/" element={<PostFeed />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
     
          <Link to="/profile">Go to Profile</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
