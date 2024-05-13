import "./index.css";
import Header from "./Components/Header";
import NavAside from "./Components/NavAside";
import Feed from "./Components/Feed";
import Profile from "./Components/Profile";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <div className="container h-full max-w-full grid grid-cols-[repeat(2,_auto)] grid-rows-[60px,_auto]">
      <Header />
      <NavAside />
      <main>
      <Routes>
        <Route path={'/'} element={<Feed />} />
        <Route path={'/profile'} element={<Profile />} />
      </Routes>
        
      </main>
    </div>
    </>
  );
}

export default App;
