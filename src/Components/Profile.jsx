/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import { AppContext } from '../App'
import '../styles/Profile.css'

export default function Profile() {
    const {posts, setPosts, contacts, setContacts} = useContext(AppContext);
    
    const handleSubmit = () => {

    }

    return (
        <div className="profile">
            <h2>Profile</h2> 
            <section className="form-container">
                <section className="profile-header">
                    
                </section>

                <form onSubmit={handleSubmit}>
                    <button>Save</button>
                </form>
            </section>
        </div>
    )
}