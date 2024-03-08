import React, { useContext } from 'react'
import UserIconComponent from '../../../../assets/user-icon'
import { loginUserContext } from '../../../../../App'
import './CreateComment.css'

export default function CreateCommentComponent({ postId }) {
    const { loginUser } = useContext(loginUserContext)

    return (
        <div className='createcomment'>
            <UserIconComponent classname='icon' user={loginUser.get}/>
            <input className='comment' placeholder='Comment'/>
            <button className='button'>Comment</button>
        </div>
    )
}
