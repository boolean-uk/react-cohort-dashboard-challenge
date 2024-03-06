/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import PostCommentsList from "./PostCommentsList"

export default function Post({contacts}){
    const {id} = useParams()
    const [post, setPost] = useState(null)

    useEffect(()=>{
        fetch(`https://boolean-api-server.fly.dev/mkmbaran/post/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
        .catch(error => console.error('Error fetching post: ', error))
    }, [id])

    //const contact = contacts.find((x) => x.id === post.contactId)

    if (!post) return <p>Loading post...</p>

    //if (!contact) return <p>Loading post author...</p>

    return(
        <main>  
            <article>
                <h2>{Comment.contactId}</h2>
                <h1 className="post--title">{post.title}</h1>
                <p>{post.content}</p>
            </article> 
            <PostCommentsList post={post}/>
            <Link to={`/posts/`}>Return to post feed</Link>
        </main>
    )
}