import { useEffect, useState, useContext } from "react"
import { useParams } from 'react-router-dom'
import { PostContext } from "../../../App"
import PostItem from "./PostItem";


function DetailedPost() {
    const {posts} = useContext(PostContext);
    const[post, setPost] = useState("")   

    const {id} = useParams()

    console.log(posts)

    useEffect(() => {
        if(posts && id){
            setPost(posts.find((post) => Number(post.id) === Number(id)))
        }
    }, [])

    if(!post) return <p>Loading...</p>


  return (
    <div className="single-post-container">
        <PostItem post={post}></PostItem>
    </div>
  )
}

export default DetailedPost