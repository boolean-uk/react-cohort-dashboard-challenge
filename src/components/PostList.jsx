import PostListItem from './PostListItem.jsx'
import { useContext } from 'react'
import { PostContext, UserContext } from '../App'
import "../styles/PostList.css";

function PostList() {
    const { posts } = useContext(PostContext);

    return (
        <div className='postList'> 
            <ul className="posts">
                {posts.slice().reverse().map((post) => (
                    <PostListItem key={post.id} post={post} />
                ))}
            </ul>
        </div>
    )
}

export default PostList