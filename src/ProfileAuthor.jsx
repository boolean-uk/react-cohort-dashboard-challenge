import React from 'react';

const ProfileAuthor = ({ initials }) => {
    const circleStyle = {
        display: 'inline-block',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#3498db',
        color: '#fff',
        textAlign: 'center',
        lineHeight: '40px',
        fontSize: '16px',
        fontWeight: 'bold',
        margin: '5px'
    };

    return <div style={circleStyle}>{initials}</div>;
};

export default ProfileAuthor;