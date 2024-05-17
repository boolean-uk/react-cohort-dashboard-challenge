import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchPost } from "../services/api"
import Post from "../components/Post"

export default function PostPage() {

    const params = useParams()
    const [post, setPost] = useState({})

    async function getPost() {
        const postsResponse = await fetchPost(params.id)

        setPost(postsResponse)
}

useEffect(() => {getPost()}, [])
if (post.id === undefined) {
    return <div></div>
}
    return (
        <div><Post post={post} /> </div>
    )
}