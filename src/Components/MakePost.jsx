import { useState } from 'react'
import IconUser from './IconUser'   

// eslint-disable-next-line react/prop-types
export default function MakePost({posts, setPosts, users}) {
    const [newPost, setNewPost] = useState('')
    const [newTitle, setNewTitle] = useState('')



        
        async function ManageSubmission(e) {
            e.preventDefault()
    
            try {
                const response = await fetch("https://boolean-uk-api-server.fly.dev/FelixMathiasson/post", {
                    method: "POST",
                    body: JSON.stringify({
                        contactId: 1,
                        title: newTitle,
                        content: newPost,
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
    
                if (response.ok) {
                    const createdPost = await response.json()
                    
                    setPosts([createdPost, ...posts])
                } else {
                    console.error("Failed to create a new post")
                }
            } catch (error) {
                console.error('Error:', error)
            }
    
            setNewPost('')
            setNewTitle('')
        }

        function ManageChange(e) {
            const { name, value } = e.target
            if (name === 'content') {
                setNewPost(value)
            } else if (name === 'title') {
                setNewTitle(value)
            }
        }
    
    return (
        <section id='createPost'>
            <IconUser user={users[0]}/>
            <div id='createPostForm'>
                <form id='formPosting' onSubmit={ManageSubmission}>
                    <input type='text' name='title' placeholder="Title" value={newTitle} onChange={ManageChange}/>
                    <div id='onYourMind'>
                        <input type='text' name='content' placeholder="What's on your mind?" value={newPost} onChange={ManageChange}/>
                    </div>
                    <div id='postBtn'>
                      <button id='postPostingButton' type='submit'>Post</button>
                    </div>
                </form>
            </div>
        </section>
    )
}