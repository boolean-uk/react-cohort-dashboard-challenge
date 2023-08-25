import './styles/app.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import NewsFeed from './pages/NewsFeed/NewsFeed';
import DataContext from './DataContext'
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])

  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
  }

  async function getUsers() {
    const response = await fetch("http://jsonplaceholder.typicode.com/users/?_limit=3")
    const json = await response.json()
    setUsers([...json])
    const response2 = await fetch("https://jsonplaceholder.typicode.com/posts/?_limit=30")
    const json2 = await response2.json()
    setPosts([...shuffle(json2)])
  }

  useEffect(() => {
    getUsers()
  },[])

  return (
    <div className="app">
      <DataContext.Provider value={{ users, posts }}>
        <Header />
        <NavBar />

        <Routes>
          <Route path='/' element={<NewsFeed/>} />
        </Routes>
      </DataContext.Provider>
    </div>
  );
}

export default App;

// http://jsonplaceholder.typicode.com/users/?_limit=3
// https://jsonplaceholder.typicode.com/posts/?_limit=30
// https://jsonplaceholder.typicode.com/comments/?_limit=150

// function shuffle(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   return arr
// }