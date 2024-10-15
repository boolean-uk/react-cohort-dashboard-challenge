import { useContext, useEffect, useState } from "react"
import { UsersContext } from "../App"
import Comment from "./Comment"
import CreateComment from "./CreateComment"
import { useNavigate } from "react-router-dom"
import UserIcon from "./UserIcon"


function Post( props ) {
    const { post } = props
    const { users } = useContext(UsersContext)
    const [comments, setComments] = useState([])
    const Navigate = useNavigate()
    const findUser = (id) => {
        return users.find( u => u.id === id)
    }

    const fetchComments = async () => {
        if(post.id){
          await fetch("https://boolean-uk-api-server.fly.dev/danielmjosroli/post/" + post.id.toString() +"/comment").then(Response => {
            if(Response.ok){
              return Response.json()
            }
            throw Response
        
            }).then(data => {
              setComments(data)
            }).catch(error => {
              console.error("Error fetching data: ", error)
            })
        }
        
      }
    useEffect(() => {
        fetchComments()
    }, [post])

    let user = findUser(post.contactId)
    return(
        <div className="post">
          <div className="user-title">
            {user?<UserIcon user={user}/>: <></>}
            <h2>{user?.firstName + ' ' + user?.lastName }</h2>
            <h3 onClick={() => Navigate("/" + post.id.toString())} >{post.title}</h3>
          </div>
            <p>{post.content}</p>
            <div className="comments">
                {comments.map((comment) => (
                    <Comment comment={comment} key={comment.id} findUser={findUser}/>
                ))}
                <CreateComment postId={post.id} fetchComments={fetchComments}/>
            </div>
        </div>

    )
}

export default Post