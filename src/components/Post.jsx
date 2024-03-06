import React, { useContext, useEffect, useState } from 'react'
import { ConnectionContext, UsersContext } from '../App'
import { Comment } from './Comment';
import { PersonalComment } from './PersonalComment';
import ProfilePicture from './ProfilePicture';


export function Post({ post }) {
    
    const {url} = useContext(ConnectionContext);
    const {users} = useContext(UsersContext)

    const [user, setUser] = useState({})

    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch(`${url}/${post.id}/comment`, {
            method: "GET", 
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json()).then(setComments)

        setUser(users.find(u => u.id == post.contactId))
    }, [users])

    if ( !user) return <a> It broke</a>

    return (
        <>
            <div className='Post'>
                <ProfilePicture firstName={user.firstName} 
                lastName={user.lastName} 
                favouriteColour={user.favouriteColour}/>
                Post {post.contactId}: {post.title}<br/>{post.content}</div>
            {comments.map((comment, key) =>
            <Comment comment={comment} key={key}/> 
            )}
            <PersonalComment post={post} setComments={setComments}/>
        </>
    )
}