/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import PostCommentsList from "./PostCommentsList"
import { MyContext } from "../App"
import ProfilePicture from "./ProfilePicture"

export default function Post(){
    const context = useContext(MyContext)
    const {id} = useParams()
    const [post, setPost] = useState(null)

    useEffect(()=>{
        fetch(`https://boolean-api-server.fly.dev/mkmbaran/post/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
        .catch(error => console.error('Error fetching post: ', error))
    }, [id])

    const contact = context.contacts.find((x) => x.id === post?.contactId)

    if (!post) return <p>Loading post...</p>
    if (!contact) return <p>Loading post author...</p>

    return(
        <main className="post">  
            <section>
                <div className="card">
                <ProfilePicture firstName={contact.firstName} lastName={contact.lastName} favouriteColour={contact.favouriteColour} />
                <h2>{contact.firstName} {contact.lastName}</h2>
                <h1 className="post--title">{post.title}</h1>
                <p>{post.content}</p>
            
                <PostCommentsList post={post}/>
                </div>
                <Link to={`/`}><button>Return to post feed</button></Link>
            </section> 
        </main>
    )
}