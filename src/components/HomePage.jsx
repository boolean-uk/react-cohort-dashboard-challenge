import CreatePost from "./CreatePost";
import Post from "./Post";

export default function HomePage ({posts, users, setPosts}) {
    // console.log(posts)
    // console.log(users)
    return (
        <main className="page">
            <CreatePost users={users} setPosts={setPosts} posts={posts}/>
             {posts.map(p => <Post key={p.id} post={p} users={users} posts={posts} setPosts={setPosts}/>)}             
        </main>
    )
}