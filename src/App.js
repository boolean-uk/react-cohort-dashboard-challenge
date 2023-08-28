import './styles/app.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import NewsFeed from './pages/NewsFeed/NewsFeed';
import DataContext from './DataContext'
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  // Define number of users, including current active user
  const userNum = 5
  // Define number of posts in the NewsFeed
  const postNum = 3

  // All users, where user[0] is the active user
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])

  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
  }

  async function getUserPosts() {
    const response = await fetch(`http://jsonplaceholder.typicode.com/users/?_limit=${userNum}`)
    const json = await response.json()
    setUsers([...json])
    const response2 = await fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=${10*userNum}`)
    const json2 = await response2.json()
    setPosts([...shuffle(json2).slice(0,postNum)])
  }

  async function getComments() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/?_limit=${50*userNum}`)
    const json = await response.json()
    //Get only comments relevant to the fetched posts
    setComments([...json.filter(comment => ((posts.find(post => post.id === comment.postId)) !== undefined))])
  }

  useEffect(() => {
    getUserPosts()
  },[])

  useEffect(() => {
    getComments()
  },[posts])

  return (
    <div className="app">
      <DataContext.Provider value={{ users, posts, comments, setComments }}>
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

// http://jsonplaceholder.typicode.com/users/?_limit=5
// https://jsonplaceholder.typicode.com/posts/?_limit=50
// https://jsonplaceholder.typicode.com/comments/?_limit=250

// function shuffle(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   return arr
// }