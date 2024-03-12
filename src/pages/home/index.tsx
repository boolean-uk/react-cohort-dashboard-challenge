import React from 'react'
import NewPost from './components/NewPost';
import './styles/home.css';
import PostList from './components/PostList';

const Home = () => {
  return (
    <div className='home-container'>
      <NewPost />
      <PostList />
    </div>
  )
}

export default Home;