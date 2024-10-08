import { useContext } from "react";
import { ContactContext } from "../../App"
import { PostListItem } from "./PostListItem";
import '../dashboard/Dashboard.css'

export function PostList() {
    const {posts} = useContext(ContactContext);
    
    return(
        <ul className="ul">
            {posts.map(( post ) => (
                <PostListItem  key={post.id} post={post} />
            ))}
        </ul>
    )
}