import React from 'react'
import Navbar from './Navbar'
import PostList from './PostList'

function Dashboard() {
  return (
    <section className='page-content'>
    <Navbar/>
    <PostList/>
    </section>
  )
}

export default Dashboard