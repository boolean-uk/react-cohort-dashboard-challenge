import './styles/app.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import NewsFeed from './pages/NewsFeed/NewsFeed';
import DataContext from './DataContext'
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SinglePost from './pages/SinglePost/SinglePost';
import Profile from './pages/Profile/Profile';
import { ReactComponent as HomeIcon } from './components/svg/home-icon.svg'
import { ReactComponent as ProfileIcon } from './components/svg/profile-icon.svg'

function App() {
  // Define number of users, including current active user
  const userNum = 6
  // Define number of posts in the NewsFeed
  const postNum = 7

  // All users, where user[0] is the active user
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  //Keeping track of what id a new post should have
  const [thisPostId, setThisPostId] = useState(null)
  const [comments, setComments] = useState([])
  //Keeping track of what id a new comment should have
  const [thisCommentId, setThisCommentId] = useState(null)
  const [firstLoad, setFirstLoad] = useState(false)
  //Set NavBar Buttons
  const [tabs, setTabs] = useState([
    {
        id: 0,
        icon: <HomeIcon/>,
        label: 'Home',
        active: true,
        path: '/' 
    },
    {
        id: 1,
        icon: <ProfileIcon/>,
        label: 'Profile',
        active: false,
        path: '/user/1'
    }
  ])

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
    setFirstLoad(true)
    //Start setting ids for new posts from the current post max id + 1
    setThisPostId(10*userNum+1)
  }

  async function getComments() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/?_limit=${50*userNum}`)
    const json = await response.json()
    //Get only comments relevant to the fetched posts
    setComments([...json.filter(comment => ((posts.find(post => post.id === comment.postId)) !== undefined))])
    //Start setting ids for new comments from the current comment max id + 1
    setThisCommentId(50*userNum+1)
  }

  useEffect(() => {
    getUserPosts()
  },[])

  useEffect(() => {
    getComments()
  },[firstLoad])

  return (
    <div className="app">
      <DataContext.Provider value={{ users, setUsers, posts, setPosts, comments, setComments, thisPostId, setThisPostId, thisCommentId, setThisCommentId, tabs }}>
        <Header />
        <NavBar />

        <Routes>
          <Route path='/' element={<NewsFeed/>} />
          <Route path='/post/:postId' element={<SinglePost/>} />
          <Route path='/user/:id' element={<Profile />} />
        </Routes>
      </DataContext.Provider>
    </div>
  );
}

export default App;

// http://jsonplaceholder.typicode.com/users/?_limit=5
// https://jsonplaceholder.typicode.com/posts/?_limit=50
// https://jsonplaceholder.typicode.com/comments/?_limit=250