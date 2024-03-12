import React from 'react';
import './styles/postHeader.css';
import ProfilePicture from '../../../components/misc/ProfilePicture';
import { Contact, Post } from '../../../types';
import { useNavigate } from 'react-router-dom';


const PostHeader = ({user, post}: {user: Contact | undefined, post: Post}) => {
  const navigate = useNavigate();
  return (
    <div className='post-header-container'>
        <ProfilePicture firstName={user?.firstName} lastName={user?.lastName} />
        <div className='post-header-info'>
            <h3>{`${user?.firstName} ${user?.lastName}`}</h3>
            <p onClick={() => navigate(`/post/${post.id}`)} className='post-header-title'>{post.title}</p>
        </div>
    </div>
  );
};

export default PostHeader;