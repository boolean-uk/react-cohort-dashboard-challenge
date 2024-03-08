import './style/dash.css'
import logo from './assets/title_header.svg';
import profile from './assets/profile-icon.svg';
import home from './assets/home-icon.svg';
import { Link, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import { Dash } from './components/Dash';
import { useState, useEffect } from 'react';

function App() {
   const [data, setData] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch posts
    fetch(`https://boolean-api-server.fly.dev/ateeb020301/post`)
      .then(response => response.json())
      .then(posts => setData(posts))
      .catch(error => console.error("Fetching error: ", error));
  }, []);

  useEffect(() => {
    // Fetch contacts
    fetch(`https://boolean-api-server.fly.dev/ateeb020301/contact`)
      .then(response => response.json())
      .then(contacts => setContacts(contacts))
      .catch(error => console.error("Fetching error: ", error));
  }, []);

  console.log(data)
  console.log(contacts)
  return (
        <body>
          <div className="container">
            <header className="header blue">
              <div className='iconBox'>
                  <img src={logo}/>
              </div>
            
            </header>
            <div className="container-nav-main">
              <nav className="sidebar red">
                <ul>
                  <li>
                    <Link to='/dash/1'> 
                      <img src={home}/>
                    </Link>
                  </li>
                  <li>
                    <Link to='/dash/profile/1'>
                      <img src={profile}/>
                    </Link>
                  </li>
                </ul>
              </nav>
            <Routes>
              {/* <Route path="contact/:id" element={<ContactProfile  data={data} />} /> */}
              <Route path="/dash/profile/:id" element={<Profile contacts={contacts} data={data} setData={setData} />} />

              {/* <Route path="/contact/:id/delete" element={<ContactDelete data={data}/>} /> */}
              <Route path="/dash/:id" element={<Dash data={data} setData={setData} contacts={contacts} />} />
            </Routes>
            </div>
          </div>

        </body>
  )
}

export default App
