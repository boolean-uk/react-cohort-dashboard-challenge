import { useContext } from "react"
import { PostContext } from ".."

function Timeline() {
    const context = useContext(PostContext)

    return(
        <>
            {context.posts.map((post, index) => (
                <p key={index}>{post.content}</p>
            ))}
        </>
    )
}

export default Timeline