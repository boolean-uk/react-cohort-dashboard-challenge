import Post from "./Post";
import { useContext } from "react";
import DataContext from "../../DataContext";

export default function PostSection() {
    const {posts} = useContext(DataContext)
    return (
        <ul className="post-section">
            {
                posts.map((post,index) => {
                    return <Post key={index} post={post} />
                })
            }
        </ul>
    )
}