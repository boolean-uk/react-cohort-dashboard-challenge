import React, { createContext, useState } from 'react'
import './Dashboard.css'
import { Route, Routes } from 'react-router-dom'
import ContentComponent from './Dashboard/Content'
import ProfileComponent from './Dashboard/Profile'
import SingularPostComponent from './Dashboard/SingularPost'

export const postContext = createContext()

export default function DashboardComponent() {

    const [getPosts, setPosts] = useState([])
    const posts = { get: getPosts, set: setPosts }

    return (
        <div className='dashboard'>
            <postContext.Provider value={{posts}}>
                <Routes>
                    <Route
                        path="/"
                        element={<ContentComponent />}
                    />
                    <Route
                        path="/post/:id"
                        element={<SingularPostComponent />}
                    />
                    <Route
                        path="/profile/:user"
                        element={<ProfileComponent />}
                    />
                </Routes>
            </postContext.Provider>
        </div>
    )
}
