import React, { useContext, useState } from 'react'
import UserIconComponent from '../../assets/user-icon'
import './CreatePost.css'
import { APIURL, loginUserContext } from '../../../App.jsx'

export default function CreatePostComponent({posts}) {

    const { loginUser } = useContext(loginUserContext)

    const [getPost, setPost] = useState({
        title: "",
        content: "",
        contactId: loginUser.get.id
    })
    const post = { get: getPost, set: setPost }

    const onChange = (e) => {
        const {name, value} = e.target
        post.set({
            ...post.get,
            [name]: value
        })
    }

    const postComment = async (e) => {
        if (post.get.content != "" && post.get.title != "") {
            const response = await fetch(`${APIURL}/post/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(post.get),
            })

            post.set({
                ...post.get,
                title: "",
                content: ""
            })

            fetch(`${APIURL}/post/`)
                .then(response => response.json())
                .then(data => posts.set(data.reverse()))
        }
    }

    return (
        <div className='createpost'>
            <div className='card'>
                <UserIconComponent user={loginUser.get} />
                <input name="title" className='textbox' placeholder='Title' value={post.get.title} onChange={onChange}/>
                <input name="content" className='textbox' placeholder='Share your thoughts' value={post.get.content} onChange={onChange}/>
                <button className='button' onClick={postComment}>Post</button>
            </div>
        </div>
    )
}
