import React from 'react';
import Header from './components/layout/Header'
import Navigation from './components/layout/Navigation'
import PostForm from './components/post/PostForm'
import Post from './components/post/Post'
import { UserProvider } from './contexts/UserContext';
import { PostProvider } from './contexts/PostContext';
import { CommentProvider } from './contexts/CommentContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SinglePost from './components/post/SinglePost';
import './App.css'
import ProfilePage from './components/user/ProfilePage';

const App = () => {

  return (
    <Router>
      <UserProvider>
        <PostProvider>
          <CommentProvider>
            <div className='app'>
              <Header />
              <div className='main-content'>
                <Navigation />
                <div className='feed'>
                  <Routes>
                    <Route path="/" element={
                      <>
                        <PostForm />
                        <Post />
                      </>
                    } />
                    <Route path="/post/:id" element={<SinglePost />} />
                    <Route path='/profile' element={<ProfilePage />} />
                  </Routes>
                </div>
              </div>
            </div>
          </CommentProvider>
        </PostProvider>
      </UserProvider>
    </Router>
  )
}

export default App
