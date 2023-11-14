/* eslint-disable react/prop-types */
import PostForm from "./postForm"
import PostFeed from "./postFeed"
export default function Main ({users, posts, setPosts}) {
    
    return (
        <div className="main">
            <PostForm  setPosts={setPosts}/>
            <PostFeed users={users} posts={posts} setPosts={setPosts}/>
        </div>
    )
}
