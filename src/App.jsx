import { useEffect, useState, createContext } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

const LoggedInUserContext = createContext()

const initialUserState = {firstName:"",lastName:"",gender:"",email:"",jobTitle:"",street:"",city:"",latitude:0,longitude:0,favouriteColour:"",profileImage:"",id:-1}

function App() {
  const [loggedInUser, setLoggedInUser] = useState(initialUserState)

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/AGatland/contact/1")
    .then(res => res.json())
    .then(data => setLoggedInUser(data))
  }, [])

  return (
    <div className="container">
    <LoggedInUserContext.Provider value={ { loggedInUser: loggedInUser } }>
      <Header />
      <div className="container-nav-main">
        <Sidebar />
        <main className="main">
          <div className="yellow"></div>
          <div className="yellow"></div>
          <div className="yellow"></div>
          <div className="yellow"></div>
        </main>
      </div>
    </LoggedInUserContext.Provider>
  </div>
  )
}

export { LoggedInUserContext, App}
