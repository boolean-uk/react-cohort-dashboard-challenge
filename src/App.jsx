import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import Left_Menu from './left_menu'
import Home from './home'
import { Routes, Route, Link } from 'react-router-dom';
import Profile from './profile'
import Post from './home/components/post'
import Individual_Post from './individual_post'

import { createContext } from 'react'

const userContext = createContext()
const postContext= createContext()

export default function App() {

  const [users, setUsers]=useState([])
  const [user, setUser]=useState({
    firstName: 'Greg',
    lastName: 'Gregson'
  })

  const [posts, setPosts]=useState([

    {   user:user,
        title:'Danny',
        message: 'Danninator'
    }
    
])

  return (
    <div className='main_page'>
      <userContext.Provider value={{users, setUsers, user, setUser}}>
        <postContext.Provider value={{posts, setPosts}}>
          <Header/>
          <div className='grid_container'>
            <Left_Menu/>
            

            <Routes>
              <Route 
                path="/home" 
                element={<Home/>} 
              />
              <Route 
                path="/profile" 
                element={<Profile/>} 
              />

              <Route 
                path="post/:id" 
                element={<Individual_Post/>} 
              />
            
            </Routes>
          </div>
        </postContext.Provider>
        

      </userContext.Provider>
      
      
    </div>
      
    
  )
}

export { userContext, postContext}
