import { useEffect, useContext } from "react"
import {useParams} from "react-router-dom"
import { PostContext } from '../App'
import CommentList from "./CommentList"

function PostView(){
    const {id} = useParams()
    const {posts, post, setPost} = useContext(PostContext)

    useEffect(() => {
        if(posts && id){
            const matchingPost = posts.find((post) => post.id === parseInt(id, 10))
            setPost(matchingPost)
        }
    }, [post, id])
    
    if(!post){
        return <div>Loading...</div>
    }

    return(
        <div className="yellow">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <CommentList id={id}/>
        </div>
    )
}

export default PostView