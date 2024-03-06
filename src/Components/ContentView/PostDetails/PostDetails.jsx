import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import PostListItem from "../PostView/PostList/PostListItem/PostListItem"
import { basePostUrl } from "@/Utils/apiUtils"

const PostDetails = () => {
    const [post, setPost] = useState()
    const { id } = useParams()

    const fetchPostData = async (id) => {
        await fetch(basePostUrl+"/"+id)
            .then((res) => res.json())
            .then((res) => setPost({...res}))
    }

    useEffect(() => {
        if (id) {
            fetchPostData(id)
        }
    }, [id])

    return (
        <div>
            {post && <PostListItem post={post}/>}
        </div>
    )
}

export default PostDetails