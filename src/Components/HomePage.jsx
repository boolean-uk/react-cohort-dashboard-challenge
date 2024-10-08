import Post from './Post'
import MakePost from './MakePost'
import { AppContext } from "../App"
import { useContext } from 'react'

// eslint-disable-next-line react/prop-types
export default function Homepage({setPosts}) {
    const { posts, users } = useContext(AppContext)
    console.log(posts)

    return (
        <main className='page'>
            <MakePost posts = {posts} setPosts={setPosts}  users = {users}/>
            {/* eslint-disable-next-line react/prop-types */}
            {posts.map(p => <Post key = {p.id} post = {p} posts={posts} setPosts = {setPosts} users = {users}/>)}
        </main>
    )
}