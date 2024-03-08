import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePicture = ({ firstName, lastName, favouriteColour, height, width, profileId }) => {
  const nav = useNavigate()
  // Function to generate initials from the first and last name
  const generateInitials = () => {
    const firstInitial = firstName ? firstName[0] : '';
    const lastInitial = lastName ? lastName[0] : '';
    return `${firstInitial}${lastInitial}`.toUpperCase();
  };

  // Style object for the circle with the background color
  const circleStyle = {
    width: width || '48px', // Adjust the size of the circle as needed
    height: height || '48px',
    borderRadius: '50%',
    backgroundColor: favouriteColour || '#CCCCCC', // Default to a fallback color if favouriteColour is not provided
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000046', // You can adjust the text color based on your design
    fontSize: '20px', // Adjust the font size as needed
    fontWeight: 'bold',
    font: "Lexend",
  };

  return (
    <div style={circleStyle} onClick={() => nav(`/profile/${profileId}`)}>
      {generateInitials()}
    </div>
  );
};

export default ProfilePicture;