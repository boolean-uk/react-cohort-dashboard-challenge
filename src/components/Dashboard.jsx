import React from 'react'
import './Dashboard.css'
import { Route, Routes } from 'react-router-dom'
import ContentComponent from './Dashboard/Content'
import ProfileComponent from './Dashboard/Profile'

export default function DashboardComponent() {
    return (
        <div className='dashboard'>
            <Routes>
                <Route
                    path="/"
                    element={<ContentComponent />}
                />
                <Route 
                    path="/profile/:user"
                    element={<ProfileComponent />}
                />
            </Routes>
        </div>
    )
}
