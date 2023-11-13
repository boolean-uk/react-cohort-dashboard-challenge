/* eslint-disable react/prop-types */
import PostForm from "./postForm"
import PostFeed from "./postFeed"
export default function Main ({users, posts}) {
    
    return (
        <div className="main">
            <PostForm/>
            <PostFeed users={users} posts={posts}/>
        </div>
    )
}
