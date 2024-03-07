import Post from './Post'

import { useContext } from "react"
import { PostContext } from ".."

function Timeline() {
    const context = useContext(PostContext)

    return(
        <>
            {[...context.posts].reverse().map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </>
    )
}

export default Timeline