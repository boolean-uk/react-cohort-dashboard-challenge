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
                <div className="post-profile">
                    <Link to={`/profile/${contact.id}`}>
                    <ProfilePicture firstName={contact.firstName} lastName={contact.lastName} favouriteColour={contact.favouriteColour} />
                    </Link>
                </div>
                <Link to={`/profile/${contact.id}`}>
                <h4>{contact.firstName} {contact.lastName}</h4>
                </Link>
                <h1 className="post--title">{post.title}</h1>
                <p>{post.content}</p>
            
                <PostCommentsList post={post}/>
                <br/>
                <br/>
                <Link to={`/`}><button>Return to post feed</button></Link>
                </div>
            </section> 
        </main>
    )
}