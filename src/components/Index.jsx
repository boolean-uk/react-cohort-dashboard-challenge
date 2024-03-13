import Feed from "./Dashboard/Feed"
import Post from "./Dashboard/Post"
import Header from "./Header/Header"
import Sidebar from "./Sidebar/Sidebar"
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function Index() {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState('')

    
    const fetchData = () => {
        fetch("https://boolean-api-server.fly.dev/hkyksk/post")
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            setPosts(data)
          })
          .catch((error) => console.error("Error fetching data:", error))
    };

    const fetchUser = () => {
        fetch("https://boolean-api-server.fly.dev/hkyksk/contact")
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            setUsers(data)
            if(data.length > 0) {
                setCurrentUser(data[0]);
                console.log(currentUser)
            }
          })
          .catch((error) => console.error("Error fetching data:", error))
    };

    useEffect(() => {
        fetchData()
        fetchUser()
      }, [])

    return (
        <div className="body">
        {/*
        <Router>
            <Routes>
                <Route path="/" element={<Header/>}></Route>                
                <Route path="/" element={<Sidebar/>}></Route>
            </Routes>
        </Router>
        */}
        <Header currentUser={currentUser}/>
        <Sidebar/>
        <div className="dashboard">
          <Post currentUser={currentUser}/>
          <Feed posts={posts} users={users} currentUser={currentUser}/>
        </div>
      </div>
    )
}