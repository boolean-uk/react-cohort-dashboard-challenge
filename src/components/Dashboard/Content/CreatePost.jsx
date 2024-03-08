import React, { useContext } from 'react'
import UserIconComponent from '../../assets/user-icon'
import './CreatePost.css'
import { loginUserContext } from '../../../App.jsx'

export default function CreatePostComponent() {

    const { loginUser } = useContext(loginUserContext)

    return (
        <div className='createpost'>
            <div className='card'>
                <UserIconComponent user={loginUser.get} />
                <input className='textbox' placeholder='Share your thoughts' />
                <button className='button'>Post</button>
            </div>
        </div>
    )
}
