import PostContent from './PostContent';
import PostHeader from './PostHeader';
import "../../styles/posts/Post.css";
import CommentSection from '../comments/CommentSection';
import { useContext, useState } from 'react';
import { PostContext } from '../../App';
import DeleteButton from '../DeleteButton';
import { useNavigate } from 'react-router-dom';
import EditButton from '../EditButton';
export default function Post({ post, showAllComments = false }) {
    const { posts, setPosts } = useContext(PostContext)
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();
    const handleDeletePost = () => {
        fetch(`https://boolean-api-server.fly.dev/spectraldesign/post/${post.id}`, {
            method: 'DELETE'
        }).then(() => {
            setPosts(posts.filter(p => p.id !== post.id))
            navigate("/")
        })
    }
    return (
        <div className='postContainer'>
            <PostHeader post={post} />
            <PostContent post={post} isEditing={isEditing} setIsEditing={setIsEditing} setPosts={setPosts} />
            <div className='divider'></div>
            <CommentSection post={post} showAllInitially={showAllComments} />
            <div className='buttonContainer'>
                <EditButton name='Edit post' w={100} h={40} onClick={() => { setIsEditing(!isEditing) }} />
                <DeleteButton onClick={handleDeletePost} name='Delete post' w={100} h={40} />
            </div>
        </div>
    )
}