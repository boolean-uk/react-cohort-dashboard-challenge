import "./styles.css";

import { useNavigate } from 'react-router-dom'
import { readableColor } from 'polished';
import PropTypes from 'prop-types';


// Functional component for displaying a user icon
export default function UserIcon({ userToIcon, size }) {
    const navigate = useNavigate();

    // Rendering a clickable colored circle representing the user icon
    return (
        <div 
            onClick={() => navigate(`/profile/${userToIcon.id}`)} 
            className="circle" 
            style={{
                backgroundColor: userToIcon.favouriteColour,
                // Make sure text is readable over the background color
                color: readableColor(userToIcon.favouriteColour !== "" ? userToIcon.favouriteColour : "#ffffff"),
                // Setting size if provided
                width: `${size}px`,
                height: `${size}px`,
                lineHeight: `${size}px`,
                fontSize: `${size / 2}px`,
            }}
        >
            {/* Adding initials to circle div */}
            {userToIcon.firstName.charAt(0)}
            {userToIcon.lastName.charAt(0)}
        </div>
    );
}

UserIcon.propTypes = {
    userToIcon: PropTypes.object,
    size: PropTypes.number,
  };