import React from 'react'
import './Post.css'

export default function PostComponent({post}) {


    return (
        <li className='item'>
            <div className='card'>
                {post.title}
            </div>
        </li>
    )
}
