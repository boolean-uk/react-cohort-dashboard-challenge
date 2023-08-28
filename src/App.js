import './styles/app.css'

import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header.js';
import LeftMenu from './components/LeftMenu';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import DataContext from './DataContext';

function App() {
  // TODO: user with id 1 as the logged in user
  const [user, setUser] = useState({
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  })

  return (
    <div className="app">
      <DataContext.Provider value={{ user }}>
        <Header />
        <LeftMenu />

        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/profile' element={<Dashboard />} />
        </Routes>
        
      </DataContext.Provider>
    </div>
  );
}

export default App;
