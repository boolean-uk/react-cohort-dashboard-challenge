import React from 'react'
import UserIconComponent from '../../assets/user-icon'
import './CreatePost.css'

export default function CreatePostComponent() {
    return (
        <div className='createpost'>
            <div className='card'>
                <UserIconComponent firstName={'John'} lastName={'Gun'} color={'#f4dc78'}/>
                <input className='textbox' placeholder='Share your thoughts' />
                <button className='button'>Post</button>
            </div>
        </div>
    )
}
