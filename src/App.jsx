// App.jsx
import './styles/App.css'; // Import the CSS file

import { Header } from './components/Header';
import { LeftMenu } from './components/LeftMenu';
import { Feed } from './components/Feed';
import { createContext, useEffect, useState } from 'react';
import { getPosts } from './utils/requests';
export const PostsContext = createContext('')

function App() {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data)
      })
      .catch((error) => console.error('Error fetching posts: ', error))
  }, [] );

  return (
    <div className="app-container">
      <Header />

      <PostsContext.Provider value={{posts: posts, setPosts: setPosts}}>
      <div className="main-content">
        <LeftMenu />
        <Feed />
      </div>
      </PostsContext.Provider>

    </div>
  );
}

export default App;
