import React, { useContext, useState } from 'react'
import { UsersContext } from '../App'
import ProfilePicture from './ProfilePicture'

export function Comment({ comment }) {

    const {users} = useContext(UsersContext)

    const [user, setUser] = useState(users.find(u => u.id == comment.contactId))
    console.log(user)

    if( !user) return <h1>Loading ....</h1>

    return (
        <>
            <div className='Comment'>
                <ProfilePicture firstName={user.firstName} 
                    lastName={user.lastName} 
                    favouriteColour={user.favouriteColour}/>
                Comment {comment.contactId}: {comment.content}
            </div>
        </>
    )
}
