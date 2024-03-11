import React, { useContext, useEffect, useState } from 'react'
import './Post.css'
import UserIconComponent from '../../../assets/user-icon'
import CommentsComponent from './Post/Comments'
import CreateCommentComponent from './Post/CreateComment'
import { userContext } from '../../../../App'
import { Link } from 'react-router-dom'

export default function PostComponent({ post }) {
    const { users } = useContext(userContext)
    const [getComments, setComments] = useState([])
    const comments = { get: getComments, set: setComments }
    const [show, setShow] = useState(false)

    if (!post) {
        return (
            <div>
                posts Loading...
            </div>
        )
    }

    const author = users.get.find(user => user.id == post.contactId)

    if (!author) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <li className='item'>
            <div className='card'>
                <header className='header'>
                    <UserIconComponent user={author} />
                    <div className='author-title'>
                        <div className='author'>{`${author.firstName} ${author.lastName}`}</div>
                        <Link to={`/post/${post.id}`} >
                            <div className='title'>{post.title}</div>
                        </Link>
                    </div>
                </header>
                <div className='content'>
                    {post.content}
                </div>
                <CommentsComponent postId={post.id} comments={comments} show={show}/>
                <button onClick={() => setShow(show ? false : true)} disabled={comments.get.length <= 3}>{show ? "show less" : "show more"}</button>
                <CreateCommentComponent postId={post.id} comments={comments} />

            </div>
        </li>
    )
}
