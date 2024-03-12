import React, { useContext } from 'react';
import './styles/header.css';
import ProfilePicture from '../misc/ProfilePicture';
import Icon from '../../assets/title-header.tsx';
import { UserContext } from '../../App.tsx';
import { UserContextType } from '../../types.tsx';

const Header = () => {
    const { user } = useContext(UserContext) as UserContextType;
    return (
        <div className='header'>
            <Icon />
            <ProfilePicture color={user?.favouriteColour} firstName={user?.firstName} lastName={user?.lastName} />
        </div>
    );
    
}

export default Header;