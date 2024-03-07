import React, { useContext, useEffect, useState } from 'react'
import { ConnectionContext, UsersContext } from '../App'
import { Comment } from './Comment';
import { PersonalComment } from './PersonalComment';
import ProfilePicture from './ProfilePicture';
import { Link, useParams } from 'react-router-dom';
import "./styles/Post.css"

export function Post({ postIdAlt }) {
    const { postId } = useParams()
    
    const {url} = useContext(ConnectionContext);
    const {users, posts } = useContext(UsersContext)

    console.log("ids", postIdAlt, postId)
    const post = posts.find(p => p.id == (postId || postIdAlt))

    if ( !post ) return <a>Something else broke!</a>

    const [user, setUser] = useState({})

    const [comments, setComments] = useState([])
    const [shownComments, setShownComments] = useState([])
    const [hideComments, setHideComments] = useState(true)
    useEffect(() => {
        fetch(`${url}/${post.id}/comment`, {
            method: "GET", 
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json()).then(setComments)

        setUser(users.find(u => u.id == post.contactId))
    }, [users, post, url])

    useEffect(() => {
        if ( hideComments && !postId )
            setShownComments(comments.toReversed().slice(0, 3))
        else
            setShownComments(comments.toReversed());
    }, [comments, hideComments, postId])

    if ( !user || !shownComments) return <a> It broke</a>

    return (
        <>
            <li className='list-item'>
                <div className='post-owner'>
                    <Link to={`/profile/${user.id}`} >
                        <ProfilePicture firstName={user.firstName} 
                        lastName={user.lastName} 
                        favouriteColour={user.favouriteColour}/>
                    </Link>
                    <div className='owner-info'>
                    {postIdAlt && <Link to={`/post/${post.id}`} className='post'>
                        <div className="name">{user.firstName} {user.lastName}</div>
                        <p className='title'>{post.title}</p>
                        <p className='content'>{post.content}</p> 
                        </Link>}
                    {postId && <div className="post">
                        <div className="name">{user.firstName} {user.lastName}</div>
                        <p className='title'>{post.title}</p>
                        <p className='content'>{post.content}</p> 
                    </div>}
                    </div>
                </div>
            
                <div className='comment-list'>
                    {postIdAlt && <button onClick={() => setHideComments(hc => !hc)} className='comment-list-btn'>{hideComments ? "Show more comments" : "Hide extra commenst"}</button>}
                    {shownComments.map((comment, key) =>
                    <Comment comment={comment} key={key}/> 
                    )}
                </div>
                <PersonalComment post={post} setComments={setComments}/>
            </li>
        </>
    )
}