import { usePosts } from "../../context/PostProvider";
import PostItems from "./PostItems";
import './PostViewer.css'

function PostViewer() {

    const {posts} = usePosts();
    console.log(posts)

    return (
        <ul>
            {posts.toReversed().map((post) => (
                <PostItems
                key={post.id}
                post= {post}
                />
            ))}
        </ul>
    )
}

export default PostViewer