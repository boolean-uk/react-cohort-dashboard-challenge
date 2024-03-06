import { useContext, useState } from "react"
import { PostsContext } from "@/Utils/contexts"
import PostListItem from "./PostListItem/PostListItem"

const PostList = () => {
    // eslint-disable-next-line no-unused-vars
    const [elementLimit, setElementLimit] = useState(undefined)

    const { posts} = useContext(PostsContext)
    return (
        <div>
            <ul>
                {posts.slice(0, elementLimit).map((post, index) => (
                    <PostListItem post={post} key={index}/>
                ))}
            </ul>
        </div>
    )
}

export default PostList