import React, { useState } from 'react';
import './styles/comments.css';
import CommentComponent from './Comment';
import { Comment } from '../../../types';
import { useParams } from 'react-router-dom';

const Comments = ({ comments }: { comments: Array<Comment> }) => {
    const { id } = useParams();
    const [showAll, setShowAll] = useState<boolean>(id !== undefined)

    return (
        <div className='comments-container'>
            {comments.length > 3 && (
                <p 
                    style={{ cursor: 'pointer', width: 'fit-content' }} 
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? 'Hide previous comments' : 'See previous comments'}
                </p>
                )}
            {comments.slice(showAll ? 0 : comments.length-3, comments.length).map((comment, i) => (
                <CommentComponent key={i} comment={comment} />
            ))}
        </div>
    );
};

export default Comments;