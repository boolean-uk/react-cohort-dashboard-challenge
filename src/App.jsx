import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Header from '../components/Header.jsx'
import AllPost from '../components/AllPost.jsx'
// import LoginForm from '../components/LoginForm.jsx'
import { MyContext } from '../components/MyContext.jsx'
import { Routes, Route } from 'react-router-dom'
import Profile from '../components/Profile.jsx'
import './App.css'

function App() {

    const [posts, setPosts] = useState([])
    const [contactDetail, setContactDetail] = useState([])
    const [allComments, setAllComments] = useState([])
    // const [loginDetails, setLoginDetails] = useState('')

    function generateRandomColor () {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    }


        // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/homonoviscoding/contact`)
            .then(response => response.json())
            .then(setContactDetail)
        // console.log(contactDetail)

        fetch(`https://boolean-api-server.fly.dev/homonoviscoding/post`)
            .then(response => response.json())
            .then(setPosts)          

        console.log(posts)

    }, [])
    

    return (

        <MyContext.Provider value={{ contactDetail, setContactDetail, posts, setPosts, generateRandomColor }}>

            <Header />
            <Routes>

                {/* <Route path='/' element={<LoginForm handleSubmit={handleSubmit} />} /> */}

                <Route path='/' element={<AllPost allComments={allComments} setAllComments={setAllComments} />} />
                <Route path='/profile' element={<Profile />} />

            </ Routes>
            <Sidebar />


        </MyContext.Provider>

    )
}

export default App
