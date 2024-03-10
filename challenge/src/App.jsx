import './style/dash.css';
import logo from './assets/title_header.svg';
import profile from './assets/profile-icon.svg';
import home from './assets/home-icon.svg';
import {Link, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import { Dash } from './components/Dash';
import PostView from './components/PostView'; 
import { useState, useEffect, createContext} from 'react';
export const MyContext = createContext();
function App() {

  const [data, setData] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/ateeb020301/post`)
      .then(response => response.json())
      .then(posts => setData(posts))
      .catch(error => console.error("Fetching error: ", error));
  }, []);

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/ateeb020301/contact`)
      .then(response => response.json())
      .then(contacts => setContacts(contacts))
      .catch(error => console.error("Fetching error: ", error));
  }, []);

  return (
      <div className="container">
        <header className="header blue">
          <div className='iconBox'>
              <img src={logo} alt="Logo" />
          </div>
        </header>
        <div className="container-nav-main">
          <nav className="sidebar red">
            <ul>
              <li>
                <Link to='/'> 
                  <img src={home} alt="Home" />
                </Link>
              </li>
              <li>
                <Link to='/profile'>
                  <img src={profile} alt="Profile" />
                </Link>
              </li>
            </ul>
          </nav>
          <MyContext.Provider value={{data, setData, contacts, setContacts}}>
            <Routes>
            <Route path="/" element={<Dash />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/post/:postId" element={<PostView/>} />
          </Routes>
          </MyContext.Provider>
          
        </div>
      </div>
  );
}

export default App;
