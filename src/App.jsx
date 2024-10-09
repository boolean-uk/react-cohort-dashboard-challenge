import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import PostFeed from './Components/PostFeed/PostFeed';
import SinglePostPage from './Components/Post/SingePostPage';
import { createContext, useEffect, useState} from 'react';

const AppContext = createContext();

function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/agrmet/contact/1")
    .then((rs) => rs.json())
    .then(setUser);
  }, []);

  return (
    <Router>
      <AppContext.Provider value={user}>
        <div className='container'>
          <Header />
          <div className='container-nav-main'>
            <Navbar />
            <Routes>
              <Route path="/" element={<PostFeed />} />
              <Route path="/post/:id" element={<SinglePostPage />} />
            </Routes>
          </div>
        </div>

      </AppContext.Provider>
    </Router>
  );
}

export default App;
