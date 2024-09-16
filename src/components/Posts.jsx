import { useContext, useEffect, useState } from "react"
import { MyContext } from "../App"
import Post from "./Post"

export default function Posts() {
    const context = useContext(MyContext)
    const [postUsers, setPostUsers] = useState([]);

    

    return (
        <>
        <div className="posts-container">
            {context.posts.slice().reverse().map((post, index) => {
                const user = postUsers[index]
                return (
                    <div className="rounded-post" key={post.id}>

                       <Post post={post} user={user}/>
                    </div>
                )
            })}
            </div>
        </>
    )
}
