import { useState, useEffect, createContext } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import Header from './components/statics/Header'
import LeftMenu from './components/statics/LeftMenu'
import Posts from './components/Posts/Posts'
import PostFull from './components/Posts/PostFull'
import Profile from './components/Profile/Profile'

export const MetaContext = createContext()

function App() {
    const [contacts, setContacts] = useState([])
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [showComments, setShowComments] = useState()

    useEffect(() => {
        getContacts()
        getPosts()
    }, [posts]) 

    function getContacts() {
        fetch("https://boolean-api-server.fly.dev/Hjaldrgud/contact")
            .then((response) => response.json())
            .then((data) => {
                setContacts(data)
                setLoading(false) 
            })
            .catch((error) => {
                console.error("Error fetching contacts:", error)
                setLoading(false) 
            })
    }

    function getPosts() {
        fetch("https://boolean-api-server.fly.dev/Hjaldrgud/post")
            .then((response) => response.json())
            .then((data) => {
                data.reverse()
                setPosts(data)
                setLoading(false) 
            })
            .catch((error) => {
                console.error("Error fetching posts:", error)
                setLoading(false) 
            })
    }

    const loggedIn = contacts.find(c => c.id === 1)
    if (loading) {
        return <div>Loading...</div>
    }

    if (!loggedIn) {
        console.error("Logged-in user not found.")
        return null
    }

    return (
        <MetaContext.Provider value={{
            contacts: contacts,
            posts: posts,
            setPosts: setPosts,
            loggedIn: loggedIn,
            showComments: showComments,
            setShowComments: setShowComments
        }}>
            <Header />
            <div className="app-container">
                <LeftMenu />
                <div className="content">
                  <Routes>
                  <Route
                        path="/"
                        element={<Posts />}
                    />
                    <Route
                        path="/post/:id"
                        element={<PostFull />}
                    />
                    <Route
                        path="/profile/:id"
                        element={<Profile />}
                    />
                  </Routes>
                </div>
            </div>
        </MetaContext.Provider>
    )
}

export default App
