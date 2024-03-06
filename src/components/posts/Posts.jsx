import { PostContext } from '../../pages/Home';
import { useContext } from 'react';
import Post from './Post';
import "../../styles/posts/Posts.css";

export default function Posts() {
    const { posts } = useContext(PostContext);
    return (
        <div className='postsContainer'>
            <ul>
                {posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </ul>
        </div>
    )
}