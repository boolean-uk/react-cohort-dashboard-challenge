// ProfileImage.jsx
import { Link } from 'react-router-dom';
import '../styles/ProfileImage.css'; // Corrected import path
import PropTypes from 'prop-types';

export const ProfileImage = ({ user, size = "45px" }) => {
    const colors = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#9e9e9e", "#607d8b"];

    const getInitials = (firstName, lastName) => {
        return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
    };

    const hashString = (str) => {
        let hash = 0;
        if (str.length === 0) {
            return hash;
        }
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0;
        }
        return hash;
    };

    const getColor = (firstName, lastName) => {
        const hash = Math.abs(hashString(firstName + lastName));
        const index = hash % colors.length;
        return colors[index];
    };

    if (!user) {
        return <div className="profile-image">??</div>;
    }

    return (
        <Link
            to={`/profile/${user.id}`}
            className="profile-image"
            style={{ backgroundColor: getColor(user.firstName, user.lastName), width: size, height: size }}
        >
            {getInitials(user.firstName, user.lastName)}
        </Link>
    );
};

ProfileImage.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
    }),
    size: PropTypes.string,
};