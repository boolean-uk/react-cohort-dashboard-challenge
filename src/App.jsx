import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Navigation from './Components/Navigation/Navigation'

import './App.css'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
const URL = 'https://boolean-api-server.fly.dev/faiza-tech/post'


function App() {
   const [ getPostData , setGetPostData ] = useState([])


  useEffect(() => {

    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
       
      console.log(data)
      setGetPostData(data)
      console.log('here is data',getPostData)
    })

  },[])


  return (
    <>
   

<div className="wrapper">
  <Header></Header>

  <Navigation className="navigation"></Navigation>

<Routes>
    <Route path='/home' element={<Main className="main" getPostData={getPostData} setGetPostData={setGetPostData} />}/>
    <Route path='/profile' element={<h1> this is usama and</h1>} />
</Routes>





</div>


      
    </>
  )
}

export default App
