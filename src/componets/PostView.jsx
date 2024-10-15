import {useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Post from "./Post"

function PostView () {
    const { postid } = useParams()
    const [post, setPost] = useState({})

    const fetchPost = async () => {
        await fetch("https://boolean-uk-api-server.fly.dev/danielmjosroli/post/" + postid.toString()).then(Response => {
            if(Response.ok){
              return Response.json()
            }
            throw Response
        
            }).then(data => {
              setPost(data)
            }).catch(error => {
              console.error("Error fetching data: ", error)
            }
        )
    }
    useEffect(() => {
        fetchPost()
    }, [])

    return(
        <>
            {post? <Post post={post}/> : <></>}
        </>
    )
}

export default PostView