import React from 'react'
import './user-icon.css'

export default function UserIconComponent({firstName, lastName, color}) {
    return (
        <div className='usericon' style={{backgroundColor:color}}>
            {`${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`}
        </div>
    )
}
