import React from 'react'
import './user-icon.css'

export default function UserIconComponent({ user }) {
    if (!user) {
        return (
            <div className='usericon'>
                
            </div>
        )
    }
    return (
        <div className='usericon' style={{ backgroundColor: user.favouriteColour }}>
            {`${user.firstName[0].toUpperCase() || ""}${user.lastName[0].toUpperCase() || ""}`}
        </div>
    )
}
