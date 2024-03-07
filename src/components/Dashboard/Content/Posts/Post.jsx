import React, { useContext } from 'react'
import './Post.css'
import UserIconComponent from '../../../assets/user-icon'
import { userContext } from '../Posts'
import CommentsComponent from './Post/Comments'
import CreateCommentComponent from './Post/CreateComment'

export default function PostComponent({ post }) {
    const { users } = useContext(userContext)

    const author = users.get.find(user => user.id == post.contactId)

    return (
        <li className='item'>
            <div className='card'>
                <header className='header'>
                    <UserIconComponent user={author} />
                    <div className='author-title'>
                        <text className='author'>{`${author.firstName || ""} ${author.lastName || ""}`}</text>
                        <text className='title' >{post.title}</text>
                    </div>
                </header>
                <div className='content'>
                    {post.content}
                </div>
                <CommentsComponent postId={post.id}/>
                <CreateCommentComponent postId={post.id}/>

            </div>
        </li>
    )
}
