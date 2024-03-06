// App.jsx
import './styles/App.css'; // Import the CSS file

import { Header } from './components/Header';
import { LeftMenu } from './components/LeftMenu';
import { Feed } from './components/Feed';
import { createContext, useEffect, useState } from 'react';
import { getPosts, postPost } from './utils/requests';
export const PostsContext = createContext('')

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data)
      })
      .catch((error) => console.error('Error fetching posts: ', error))
  }, [] );

  const writePost = (title, content) => {
    const newPost = 
    {
      title: title,
      content: content,
      contactId: 1, //TODO: Set logged in user
    }
    console.log(newPost)
    postPost(newPost, setPosts)
  }

  return (
    <div className="app-container">
      <Header />

      <PostsContext.Provider value={{posts: posts, writePost: writePost}}>
      <div className="main-content">
        <LeftMenu />
        <Feed />
      </div>
      </PostsContext.Provider>

    </div>
  );
}

export default App;
