import './App.css'
import { createContext, useEffect, useState } from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import FullPost from './components/FullPost'
import Main from './components/Main'
import Header from './components/Header'
import NavBar from './components/NavBar'

export const UserContext = createContext()
export const PostsContext = createContext()

function App() {
    const [user, setUser] = useState(null)

    const [posts, setPosts] = useState([])

    const [navActive, setNavActive] = useState("Home")

    useEffect(() => {
        fetch('https://boolean-uk-api-server.fly.dev/angustownsley/post')
            .then((response) => response.json())
            .then((json) => setPosts([...json]))
    }, [])
    
    useEffect(() => {
        fetch('https://boolean-uk-api-server.fly.dev/angustownsley/contact/1/')
            .then((response) => response.json())
            .then((json) => setUser({ ...json }))
    }, [])

    return (
            <UserContext.Provider value={{ user }}>
                <PostsContext.Provider value={{ posts, setPosts }}>
                    <Header />
                    <NavBar active={navActive}/>

                    <Routes>
                        <Route path="/" element={<Main />}/>
                        
                        <Route path="/post/:id" element={<FullPost />} />
                        
                    </Routes>

                </PostsContext.Provider>
            </UserContext.Provider>

    )
}

export default App
