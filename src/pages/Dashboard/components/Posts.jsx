import { useContext, useState, useEffect } from "react"
import { MyContext } from "../../../App"
import Post from "./Post"


export default function Posts() {
    const { contacts, posts, getInitials } = useContext(MyContext)

    const [comments, setComments] = useState([])

    function getComments(postId){
        fetch(`https://boolean-api-server.fly.dev/santhia97/post/${postId}/comment`)
        .then(res => res.json())
        .then(data => setComments(data))
        .catch(error => console.error('Error fetching data:', error))
    }
    
    if (contacts) return (
        <main className="main-container">
            {posts.map((post, index) => (
                <Post key={index} post={post}/>
            ))}
        </main>
    )

    return (
        <p>
            loading..
        </p>
    )
}
