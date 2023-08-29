import Post from "./Post";
import { useContext } from "react";
import DataContext from "../../DataContext";

export default function PostSection() {
    const {posts} = useContext(DataContext)
    return (
        <ul className="post-section">
            {
                posts.map(post => {
                    return <Post key={post.id} post={post} />
                })
            }
        </ul>
    )
}