import React, { useContext, useState } from 'react';
import ProfilePicture from '../../../components/misc/ProfilePicture';
import './styles/newPost.css';
import { PostsContext, UserContext } from '../../../App';
import { PostsContextType, UserContextType } from '../../../types';
import { postPostRequest } from '../../../utils/requests';

const NewPost = () => {
    const { user } = useContext(UserContext) as UserContextType;
    const { setPosts } = useContext(PostsContext) as PostsContextType;
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handlePostPost = async () => {
        if (!title || !user || !content) return;
        const response = await postPostRequest(title, content, user.id as number);
    
        if (response.status === 201) {
          const newPost = await response.json();
          setTitle('');
          setContent('');
          setPosts((posts) => [...posts, newPost]);
        }
      }
        
    return (
        <div className='new-post-container'>
            <div className='new-post-header-container'>
                <ProfilePicture firstName={user?.firstName} lastName={user?.lastName} color={user?.favouriteColour} />
                <input value={title} onChange={(e) => setTitle(e.target.value)} className='new-post-title' type='text' placeholder="What's on your mind?" />
                <button onClick={handlePostPost} className='new-post-button'>Post</button>
            </div>  
            <input value={content} onChange={(e) => setContent(e.target.value)} className='new-post-content' type='text' placeholder="Elaborate..." />
        </div>
    );
}

export default NewPost;