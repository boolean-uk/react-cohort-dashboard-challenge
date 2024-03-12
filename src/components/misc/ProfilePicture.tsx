import React from 'react';

interface ProfilePictureProps {
  firstName?: string;
  lastName?: string;
  color?: string;
}

const ProfilePicture = ({ firstName, lastName, color }: ProfilePictureProps) => {

  const getInitials = () => {
    return `${firstName? firstName[0] : ''}${lastName ? lastName[0] : ''}`.toUpperCase();
  };

  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    color: '#000046',
    fontSize: '20px',
    fontWeight: 'bold',
    backgroundColor: color || '#CCCCCC'
  }

  return (
    <div className='main' style={style} >
      {getInitials()}
    </div>
  );
};

export default ProfilePicture;