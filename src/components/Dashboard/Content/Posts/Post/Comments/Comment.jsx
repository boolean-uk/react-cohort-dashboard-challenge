import React, { useContext } from 'react'
import UserIconComponent from '../../../../../assets/user-icon'
import './Comment.css'
import { userContext } from '../../../../../../App'

export default function CommentComponent({ comment }) {

    const { users } = useContext(userContext)
    const author = users.get.find(user => user.id == comment.contactId)

    if (!author){
        return(
            <div>
            </div>
        )
    }

    return (
        <li className='comment'>
            <UserIconComponent user={author} />
            <div className='author-text'>
                {`${author.firstName} ${author.lastName}`}
                <p className='text'>
                    {comment.content}
                </p>
            </div>
        </li>
    )
}
