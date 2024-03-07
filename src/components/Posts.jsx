import { useContext } from "react"
import { MyContext } from "../App"

export default function Posts() {
    const context = useContext(MyContext)


    

    return (
        <>
            {context.posts.map(post => {
                return (
                    <div className="rounded-post" key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <div className="comments">
                        <p></p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
