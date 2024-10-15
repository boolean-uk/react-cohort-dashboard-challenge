import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import PostFeed from './components/PostFeed'
import { Routes, Route } from "react-router-dom";
import PostView from './components/PostView'
import ProfileScreen from './components/ProfileScreen';
import { createContext, useState, useEffect } from 'react';
export const UserContext = createContext();

function App() {

  const [userLoggedIn, setUser] = useState({
    firstName: "Rick",
    lastName: "Sanchez",
    street: "Morty Lane",
    city: "Jerryville",
    gender: "Male",
    email: "rick@sanchez.com",
    jobTitle: "Scientist",
    latitude: 42,
    longitude: 629,
    favouriteColour: "#0d7f26",
    profileImage: "https://www.gravatar.com/avatar/sdfa@fasdf.com?s=120&d=identicon"
  });

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("https://boolean-uk-api-server.fly.dev/PandersPanda/contact/" + 1)
      const jsonData = await response.json();
      setUser(jsonData)
      console.log(jsonData)
   };
   fetchdata();
  }, [])

  return (
    <div className="app">
      <UserContext.Provider
      value={{userLoggedIn: userLoggedIn, setUser: setUser}}>
        <Header />
        <div className="cohort_body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<PostFeed />}/>
            <Route path="/view/:id" element={<PostView/>}/>
            <Route path="/profile" element={<ProfileScreen/>}/>
          </Routes>
          </div>
      </UserContext.Provider>
    </div>
  )
}

export default App
