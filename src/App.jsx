import React, {useState, useEffect} from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Profile from './Profile';
import SideBar from './Sidebar';
import './App.css'
import HeaderIcon from './HeaderIcon';
import Post from './Post';
import PostList from './PostList';
import PostDetail from './PostDetail';


//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'



function App() {
 
  return (
    <>
 
    <div className='app-container'>
      
      <HeaderIcon/>
    
     
      <div className='content'> 
        <SideBar/>  
      
     
        <Routes>
          <Route path='/' element={<Home/>}/>
         
          <Route path='/profile' element={<Profile/>}/>

         <Route path='/posts/:id' element={<PostDetail/>}/>


          

        </Routes>
      </div>


    </div>
   


    </>


  )

}
export default App;







  /*

  return (
    <>
 
    <div className='app-container'>
      
      <HeaderIcon/>
    
     
      <div className='content'> 
        <SideBar/>  
      
     
        <Routes>
          <Route path='/' element={<Home/>}/>
         
          <Route path='/profile' element={<Profile/>}/>
          

          

        </Routes>
      </div>


    </div>
   


    </>
  );
}


export default App;


/*  <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/post/:id" element={<PostDetail/>} />

      </Routes>
     </div>
*/