// App.jsx
import '../styles//App.css'; 
import { Header } from './Header.jsx';
import { LeftMenu } from './LeftMenu.jsx';
import { Feed } from './home/Feed.jsx';
import { createContext, useEffect, useState } from 'react';
import { getPosts, postPost } from '../utils/postRequests.jsx';
import { getUser } from '../utils/userRequests.jsx';
import { Route, Routes } from 'react-router-dom';
import { Post } from './home/post/Post.jsx';
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

          <Routes>
            <Route path='/' element={
              <PostsContext.Provider value={{ posts: posts, writePost: writePost }}>
                <Feed />
              </PostsContext.Provider>
            } />

            {posts.map((post) => (
              <Route key={post.id} path={`/post/${post.id}`} element={<Post post={post} />} />
            ))}
            
            <Route path='/profile/:id' element={<p>Profile will go here</p>} />
          </Routes>
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
