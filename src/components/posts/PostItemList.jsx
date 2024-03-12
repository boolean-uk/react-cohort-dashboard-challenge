import "/src/style/PostItemList.css"
import PostItem from "./PostItem"
import { useContext } from "react"
import { PostsContext } from "../../App"

export default function PostItemList () {
    const { posts } = useContext(PostsContext)

    return(
        <div className="postItemList">
            {posts.map((post, index) => (
                <PostItem key={index} post={post} />
            ))}
        </div>
    )
}