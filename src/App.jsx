import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Main from './components/Main'
import { createContext, useContext, useEffect, useState } from 'react'

export const UserContext = createContext()

function App() {
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch('https://boolean-api-server.fly.dev/angustownsley/contact/1')
            .then((response) => response.json())
            .then((json) => setUser(json))
    })

    return (
        <UserContext.Provider value={{ user }}>
            <Header />
            <NavBar />
            <Main />
        </UserContext.Provider>
    )
}

export default App
