import React from 'react'
import UserIconComponent from '../../assets/user-icon'
import './CreatePost.css'

export default function CreatePostComponent() {

    //testuser
    const user = {
        firstName: 'John',
        lastName: 'Gun',
        favouriteColour: '#f4dc78'
    }

    return (
        <div className='createpost'>
            <div className='card'>
                <UserIconComponent user={user}/>
                <input className='textbox' placeholder='Share your thoughts' />
                <button className='button'>Post</button>
            </div>
        </div>
    )
}
