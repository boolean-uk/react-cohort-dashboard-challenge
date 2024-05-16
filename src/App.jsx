import { useState } from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Header from '../components/Header.jsx'
import Posts from '../components/Posts.jsx'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {





    return (

        <>
            <Header />
            <Posts />
            <Sidebar />
            {/* <Routes>
                
            </Routes> */}
        </>

    )
}

export default App
