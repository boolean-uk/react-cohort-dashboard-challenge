import './App.css'
import { Routes, Route } from 'react-router-dom';
import Menu from "./components/Menu/Menu"
import { PostProvider } from './context/PostProvider';

function App() {

  return (
    <PostProvider>
      <Routes>
        <Route path="/*" element={<Menu />} />
      </Routes>
    </PostProvider>
  )
}

export default App
