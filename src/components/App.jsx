// App.jsx
import '../styles/App.css'; 
import { Header } from './Header.jsx';
import { LeftMenu } from './LeftMenu.jsx';
import { Feed } from './Feed/Feed.jsx';
import { createContext, useEffect, useState } from 'react';
import { getPosts, postPost } from '../utils/postRequests.jsx';
import { getUser } from '../utils/userRequests.jsx';
export const AuthContext = createContext('');
export const PostsContext = createContext('')

function App() {
  const [authUser, setAuthUser] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getUser(1)
      .then((data) =>{
        setAuthUser(data)
      })
  }, [] );

  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data)
      })
  }, [] );

  const writePost = (title, content) => {
    const newPost = 
    {
      title: title,
      content: content,
      contactId: authUser.id,
    }
    console.log(newPost)
    postPost(newPost, setPosts)
  }

  if (!authUser) return (<p>not logged in</p>)
  return (
    <AuthContext.Provider value={authUser}>
      <div className="app-container">
        <Header />

        <div className="main-content">
          <LeftMenu />
      
          <PostsContext.Provider value={{ posts: posts, writePost: writePost }}>
            <Feed />
          </PostsContext.Provider>
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
