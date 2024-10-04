import { useState } from 'react'
import './App.css'
import Dashboard from './components/dashboard/Dashboard'
import { ContactPostProvider } from './components/context/ContactPostContext'
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom'
import PostDetails from './components/postdetails/PostDetails'
import Profile from './components/profile/profile'

function App() {
    const [count, setCount] = useState(0)

    return (
        <ContactPostProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/post/:postId" element={<PostDetails />} />
                    <Route path="/profile/:contactId" element={<Profile />} />
                </Routes>
            </Router>
        </ContactPostProvider>
    )
}

export default App
