import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Header from '../components/Header.jsx'
import Posts from '../components/Posts.jsx'
import LoginForm from '../components/LoginForm.jsx'
import { MyContext } from '../components/MyContext.jsx'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

    const [posts, setPosts] = useState([])
    const [contactDetail, setContactDetail] = useState()
    const [loginDetails, setLoginDetails] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        useEffect(() => {
            fetch(`https://boolean-api-server.fly.dev/homonoviscoding/contact`)
                .then(response => response.json())
                .then(setContactDetail)
            console.log(contactDetail)
            // if ()

        }, [])
    }

    return (

        <MyContext.provider value={{loginDetails}}>

            <Routes>

                <Header />
                <Route
                    path='/'
                    element={<LoginForm handleSubmit={handleSubmit}/>}
                />

                <Route
                    path='/dashboard'
                    element={<Posts />}
                />
                    
                    <Sidebar />

            </ Routes>


        </MyContext.provider>

    )
}

export default App
