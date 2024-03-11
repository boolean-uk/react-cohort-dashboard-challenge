import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { MyContext } from "../../../App"
import CommentList from "./CommentList"
import CommentForm from "./CommentForm"

export default function PostDetails() {
    const { contacts, getInitials } = useContext(MyContext)
    const {id} = useParams()
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])

    function getPost(){
        fetch(`https://boolean-api-server.fly.dev/santhia97/post/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
        .catch(error => console.error('Error fetching data:', error))
    }

    function getComments(){
        fetch(`https://boolean-api-server.fly.dev/santhia97/post/${id}/comment`)
        .then(res => res.json())
        .then(data => setComments(data))
        .catch(error => console.error('Error fetching data:', error))
    }

    useEffect(() => {
        getPost()
        getComments()
    })
    
    if (post && contacts) return (
                <main className="main-container">
                    <div className="card">
                    <div className="profile-picture">{getInitials(contacts.find(x => x.id === post.contactId)?.firstName + ' ' + contacts.find(x => x.id === post.contactId)?.lastName)}</div>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <CommentList post={post} getComments={getComments} comments={comments} setComments={setComments} contact={contacts.find(x => x.id === post.contactId)} /> 
                    <CommentForm post={post} comments={comments} setComments={setComments}/>
                    <Link to="/"><button>Return to post feed</button></Link>
                </div>
                </main>
    )

    return (
        <p>
            loading..
        </p>
    )
}
