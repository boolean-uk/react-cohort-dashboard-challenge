
// import Home from './assets/Home.svg'
// import Profile from './assets/Profile.svg'
import { useEffect, useState } from 'react'

import './App.css'
import Header from './Header/Header'
import Main from './Main/Main'
import LeftMenuBar from './Leftmenu/Leftmenu'
import { Route, Routes } from 'react-router-dom'
import Profile from './Main/Profile'
import OwnerProfile from './Profile/Ownerprofile'
// import Profile from './Profile/Profile'
// import OwnerProfile from './Profile/Ownerprofile'


function App() {
  const [ dataGotten, setDataGotten ] = useState([])

  useEffect(() => {
    fetch('https://boolean-api-server.fly.dev/Usamaibrahim33/post')
      .then((response) => response.json())
      .then((data) =>  {
 
        setDataGotten(data)
        console.log('this is the datagotten' , dataGotten)
      })
  }, [])


  return (
    <>
      <div className='container-layout'>
      <Header />      
      <LeftMenuBar />
      {/* <Main  dataGotten={dataGotten} setDataGotten={setDataGotten}/> */}
  
      <Routes>
         <Route path='/home' element={<Main  dataGotten={dataGotten} setDataGotten={setDataGotten}/>} /> 

         <Route path='/profile' element={<OwnerProfile />} />

         <Route path='/home/:id' element={<Profile />}/> 
      </Routes> 
      </div>
    </>
  )
}

export default App
