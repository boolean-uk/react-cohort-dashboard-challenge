import './App.css'
import { createContext, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import FullPost from './components/FullPost'
import Main from './components/Main'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Profile from './components/Profile'

export const UserContext = createContext()
export const PostsContext = createContext()
export const NavContext = createContext()

function App() {
    const [user, setUser] = useState(null)

    const [posts, setPosts] = useState([])

    const [navActive, setNavActive] = useState('Home')

    function getPosts() {
        fetch('https://boolean-uk-api-server.fly.dev/angustownsley/post')
            .then((response) => response.json())
            .then((json) => setPosts([...json]))
    }

    useEffect(() => {
        getPosts()
    }, [])

    useEffect(() => {
        fetch('https://boolean-uk-api-server.fly.dev/angustownsley/contact/1/')
            .then((response) => response.json())
            .then((json) => setUser({ ...json }))
    }, [])

    return (
        <UserContext.Provider value={{ user }}>
            <NavContext.Provider value={{ navActive, setNavActive }}>
                <PostsContext.Provider value={{ posts, setPosts, getPosts }}>
                    <Header />
                    <NavBar active={navActive} />

                    <Routes>
                        <Route path="/" element={<Main />} />

                        <Route path="/post/:id" element={<FullPost />} />

                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </PostsContext.Provider>
            </NavContext.Provider>
        </UserContext.Provider>
    )
}

export default App
