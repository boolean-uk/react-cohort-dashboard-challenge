import React, { useContext, useEffect, useState } from 'react';
import './styles/comment.css';
import ProfilePicture from '../../../components/misc/ProfilePicture';
import { Comment, Contact, UserContextType } from '../../../types';
import { UserContext } from '../../../App';

const CommentComponent = ({comment}: {comment: Comment}) => {
    const { users } = useContext(UserContext) as UserContextType;
    const [user, setUser] = useState<Contact | undefined>();

    useEffect(() => {
        if (users.length > 0) {
            setUser(users.find(u => u.id === comment.contactId))
        }
    }, [users, comment])

    return (
        <div className='comment-container'>
            <ProfilePicture firstName={user?.firstName} lastName={user?.lastName} color={user?.favouriteColour} />
            <div className='comment-text'>
                <p><strong>{`${user?.firstName} ${user?.lastName}`}</strong></p>
                <p>{comment.content}</p>
            </div>    
        </div>
    );
};

export default CommentComponent;