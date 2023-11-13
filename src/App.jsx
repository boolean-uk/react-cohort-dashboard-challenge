// import { useState } from 'react'
import Header from './components/header'
import Nav from './components/nav'
import PostFeed from './components/post-feed'
// import './App.css'

function App() {

  return (
    <>
   <div className='header-section'>
    <Header/>
   </div>

   <div className='nav-bar'>
    <Nav/>
   </div>

<div className='main-section'>
  <PostFeed/>
</div>

   </>
  )
}

export default App
