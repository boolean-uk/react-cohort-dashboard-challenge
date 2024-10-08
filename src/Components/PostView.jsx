import { useParams } from 'react-router-dom'
import Post from './Post'
import { AppContext } from "../App"
import { useContext } from 'react'

// eslint-disable-next-line react/prop-types
export default function PostView({setPosts}) {
    const urls = useParams()
    const { posts, users } = useContext(AppContext)

    // eslint-disable-next-line react/prop-types
    let post = posts.find(post => post.id === Number(urls.id))

    return (
        <main className='viewPage'>
            <Post users= {users} posts = {posts} setPosts = {setPosts} post = {post} />
        </main>
    )
}