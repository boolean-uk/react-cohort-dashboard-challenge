import { useContext, useState, useEffect } from "react"
import { MyContext } from "../../../App"
import CommentForm from "./CommentForm"
import CommentList from "./CommentList"
import { Link } from "react-router-dom"
import InitialCircle from "./InitialCircle"


export default function Post({post, index}) {
    const { contacts } = useContext(MyContext)
    const contact = contacts.find(x => x.id === post.contactId)

    const [comments, setComments] = useState([])

    function getComments(postId){
        fetch(`https://boolean-api-server.fly.dev/santhia97/post/${postId}/comment`)
        .then(res => res.json())
        .then(data => setComments(data))
        .catch(error => console.error('Error fetching data:', error))
    }
    
    if (contact) return (
                <div className="card" key={index}>
                    <div className="full-title-wrapper">
                           <Link to={`/profile/${contact.id}`} ><InitialCircle contact={contact}/></Link>
                        <div className="title-wrapper">
                            <Link to={`/profile/${contact.id}`} style={{textDecoration: "none", color: "black"}} ><div className="title-name">{contact?. firstName} {contact?.lastName}</div></Link>
                            <Link to={`/post/${post.id}`} style={{textDecoration: "none", color: "gray"}}><div className="title">{post.title}</div></Link>
                        </div>
                    </div>
                    <p>{post.content}</p>
                    <CommentList post={post} getComments={getComments} comments={comments} setComments={setComments} contact={contacts.find(x => x.id === post.contactId)} /> 
                    <CommentForm post={post} comments={comments} setComments={setComments}/>
                </div>
    )
    return (
        <p>
            loading..
        </p>
    )
}
