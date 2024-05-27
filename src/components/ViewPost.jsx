import { useParams } from "react-router-dom"
import Post from "./Post"

export default function ViewPost ({users, posts, setPosts}) {
    const urlParams = useParams()
    // console.log(typeof urlParams.id)
    // console.log(typeof posts[0].id)
    let post = posts.find(post => post.id === Number(urlParams.id))
    
    console.log(post)

    return (
        <main className="page">
            {/* <p>{urlParams.id}</p> */}
            <Post users={users} posts={posts} setPosts={setPosts} post={post} />
        </main>
    )
}