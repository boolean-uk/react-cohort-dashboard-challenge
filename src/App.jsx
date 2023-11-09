import React from 'react'
import Header from './components/Header/Header'
import Posts from './components/MainPage/CreateAPost/PostSection/Posts'
import './App.css'

function App() {

  return (
    <section className = "app">
      <div className = "header">
        <Header 
        />
      </div>
      <div className = "posts">
        <Posts 
        />
      </div>
    </section>
  )
}

export default App
