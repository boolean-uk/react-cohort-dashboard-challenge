import Post from "./Post";
import { useContext } from "react";
import DataContext from "../../DataContext";

export default function PostSection() {
    const {posts} = useContext(DataContext)
    const tmpPosts = posts.slice(0,2)
    return (
        <ul className="post-section">
            {
                tmpPosts.map((post,index) => {
                    return <Post key={index} post={post} />
                })
            }
        </ul>
    )
}