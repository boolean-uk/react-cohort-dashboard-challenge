import { useEffect, useState } from "react"
import { fetchPosts, createPost } from "../services/api"
import PostList from "../components/PostList"
import NewPost from "../components/NewPost"

export default function DashBoard() {
    
    const [posts, setPosts] = useState([])
        
    async function getPosts() {
            const postsResponse = await fetchPosts()
            postsResponse.reverse()
            setPosts(postsResponse)
    }

    async function sendPost(newPost) {
            await createPost(newPost)
            getPosts()
    }

    useEffect(() => {getPosts()}, [])

    return (
        <div>
            <NewPost onPost={sendPost} />
            <PostList posts={posts}/>
        </div>
    )
}