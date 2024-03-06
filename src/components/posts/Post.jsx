import PostContent from './PostContent';
import PostHeader from './PostHeader';
import "../../styles/posts/Post.css";
import CommentSection from '../comments/CommentSection';
export default function Post({ post }) {
    return (
        <div className='postContainer'>
            <PostHeader post={post} />
            <PostContent post={post} />
            <div className='divider'></div>
            <CommentSection post={post} />
        </div>
    )
}