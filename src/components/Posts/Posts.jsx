import { useContext } from "react"
import { MetaContext } from "../../App"
import Post from "./Post"
import PostPost from "./PostPost"

function Posts() {
    const {posts} = useContext(MetaContext)

    return (
        <div>
            <div>
                <PostPost />
            </div>
            <div>
                {posts.map((post, index) => <Post index={index} key={index} />)}
            </div>
        </div>
    )

}


export default Posts