import React, { useContext, useState } from 'react';
import './styles/addComment.css';
import ProfilePicture from '../../../components/misc/ProfilePicture';
import { UserContext } from '../../../App';
import { UserContextType, Comment } from '../../../types';
import { postCommentRequest } from '../../../utils/requests';

const AddComment = ({ postId, setComments }: { postId: number; setComments?: React.Dispatch<React.SetStateAction<Comment[]>>}) => {
  const { user } = useContext(UserContext) as UserContextType;
  const [comment, setComment] = useState('');

  const handlePostComment = async () => {
    if (!comment || !user) return;
    const response = await postCommentRequest(postId, comment, user.id as number);

    if (response.status === 201) {
      const newComment = await response.json();
      setComment('');
      setComments && setComments((comments) => [...comments, newComment]);
    }
  }

  return (
    <div className='add-comment-container'>
      <div className='aspect-ratio'>
        <ProfilePicture firstName={user?.firstName} lastName={user?.lastName} color={user?.favouriteColour} />
      </div>
      <div className='add-comment-input-container'>
        <input value={comment} onChange={(e) => setComment(e.target.value)} className='add-comment-input' type='text' placeholder='Add a comment...' />
        <button onClick={handlePostComment} className='add-comment-button'>Post</button>
      </div>
    </div>
  );
};

export default AddComment;