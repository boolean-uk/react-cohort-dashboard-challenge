import { createContext, useEffect, useState } from "react"
import {Link, Route, Routes} from 'react-router-dom'
import Comments from "../Comments"
import CommentForm from "../CommentForm"

const PostContext = createContext()

 export default function Post({post}) {
    const [user, setUser] = useState(null)
    
    const [comments, setComments] = useState([])

    const userId = post.contactId
    
    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/ilham-saleh/contact/${userId}`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res)
            }
            return res.json()
        })
        .then(data => setUser(data))
        .catch(error => {
            console.log(error)
        })
    }, [])
    

    const getComments = () => {
        fetch(`https://boolean-api-server.fly.dev/ilham-saleh/post/${post.id}/comment`)
        .then(res => res.json())
        .then(data => setComments(data))
    }

    useEffect(() => {
        getComments()
    }, [])

    

    if (!user) {
        return <p>Loading...</p>
    }
    const initials = user.firstName.charAt(0) + user.lastName.charAt(0)

    return (
        <li className="post">
            <div className="post-header">
                <div className="user-img-container">
                    <p>{initials}</p>
                </div>
                <div className="name-and-title">
                    <p className="user-name">{user.firstName} {user.lastName}</p>
                    <Link className="title" to={`/post/${post.id}`}>{post.title}</Link>
                </div> 
            </div>
            <div className="content-container">
                {post.content}
            </div>
            <Comments post={post} user={user} getComments={getComments} comments={comments}/>
            <CommentForm post={post} getComments={getComments} user={user}/>
        </li>
    )
}
