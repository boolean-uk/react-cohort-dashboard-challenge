/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from 'react'
import { AppContext } from '../../App';
import CreatePostForm from './CreatePostForm';
import PostItem from './PostItem';

export default function Feed() {
    const {posts, setPosts} = useContext(AppContext);

    return (
       <>
       <div className='feed'>
           <CreatePostForm />

           {posts.slice().reverse().map(post => (
                <PostItem key={post.id} post={post} />
            ))}

       </div>
       </>
    );
}