import { createContext, useState } from 'react'
import './App.css'
import Header from './pages/Header';
import SideMenu from './pages/SideMenu';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';

export const DataContext = createContext();

function App() {
  const [activePage, setActivePage] = useState("/")

  return (
    <div className='view'>
      <Header/>
      <div className="view-container">
        <DataContext.Provider value={{activePage: activePage}}>
          <SideMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </DataContext.Provider>
      </div>
    </div>
  );
}

export default App
